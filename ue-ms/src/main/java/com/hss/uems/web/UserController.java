package com.hss.uems.web;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hss.uems.config.constants.MailBox;
import com.hss.uems.config.constants.Url;
import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.config.exception.UnPrivilegedAccess;
import com.hss.uems.config.security.TokenProvider;
import com.hss.uems.entity.User;
import com.hss.uems.entity.bean.AuthenticatedResponse;
import com.hss.uems.entity.bean.UserDto;
import com.hss.uems.entity.security.SecureUser;
import com.hss.uems.entity.security.Token;
import com.hss.uems.service.common.mail.MailService;
import com.hss.uems.service.common.template.TemplateService;
import com.hss.uems.service.common.utils.UtilService;
import com.hss.uems.service.user.UserService;

import freemarker.core.ParseException;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

/**
 * @description controller service for User
 */
@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private TokenProvider tokenProvider;

	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private UtilService utilService;

	@Autowired
	private MailService mailService;

	private Logger logger;

	@Value("${ui.host}")
	private String uiHost;

	@Autowired
	private TemplateService templateService;

	/**
	 * @description initialize the logger to log throughout the controller...
	 */
	@PostConstruct
	public void init() {
		logger = LoggerFactory.getLogger(this.getClass());
	}

	@GetMapping(Url.SECURE_URL+Url.PROFILE)
	public ResponseEntity<?> profile() throws DataValidityException {
		return ResponseEntity.ok(userService.get(utilService.user().getUserId()));
	}

	@PutMapping(Url.SECURE_URL+Url.PROFILE)
	public ResponseEntity<?> profile(@RequestBody UserDto userDto) throws DataValidityException {
		User user = utilService.user();
		return ResponseEntity
				.ok(userService.changePassword(user.getUserId(), userDto.getPassword(), userDto.getOldPassword()));
	}

	@PutMapping(Url.SECURE_URL+Url.FCMTOKEN)
	public ResponseEntity<?> fcmToken(@RequestBody UserDto userDto) throws DataValidityException {
		userService.addFcmToken(userDto.getFcmToken(), utilService.user().getUserId());
		return ResponseEntity.ok(null);
	}

	@GetMapping(Url.PUBLIC + Url.FORGOT + "/{username}")
	public ResponseEntity<?> forgotPassword(@PathVariable String username)
			throws AccessDeniedException, UnPrivilegedAccess, TemplateNotFoundException, MalformedTemplateNameException,
			ParseException, TemplateException, IOException {

		User user = userService.findByUsername(username);
		if (user == null || (user.getDeleted() != null && user.getDeleted() == true)) {
			throw new AccessDeniedException("Access Denied !");
		}
		final UserDetails userDetails = new SecureUser(user);
		String token = user != null ? tokenProvider.generateToken(userDetails) : null;
		String url = uiHost + "/reset/" + token;
		String content = templateService.resetPassword(url, user.getFullName());
		mailService.send(user.getEmail(), "Reset Password", content, null, MailBox.HTML);
		return ResponseEntity.ok(null);
	}

	@PostMapping(Url.PUBLIC + Url.RESET + "/{token}")
	public ResponseEntity<?> resetPassword(@PathVariable String token, @RequestBody UserDto userDto)
			throws DataValidityException, UnPrivilegedAccess {
		Token tkn = tokenProvider.extractToken(token);
		User user = tkn != null ? tkn.getUser() : null;
		if (user == null)
			throw new UnPrivilegedAccess("Invalid Reset Token !");
		user.setPassword(userDto.getPassword());
		userService.deleteToken(token);
		return ResponseEntity.ok(userService.update(user));
	}

	/**
	 * @param userBean
	 * @return 401: Invalid Credentials, 200 -Success with token & user details
	 */
	@SuppressWarnings("unused")
	@PostMapping(Url.LOGIN)
	public ResponseEntity<?> login(@RequestBody UserDto userBean) throws UnPrivilegedAccess {

		logger.info("Login hit ...");
		Authentication auth = null;
		try {
			auth = authManager.authenticate(
					new UsernamePasswordAuthenticationToken(userBean.getUsername(), userBean.getPassword()));

			logger.info("Security Approved !");
		} catch (BadCredentialsException | UsernameNotFoundException ex) {
			logger.warn("Credentials not found in security bases..");
			throw new UnPrivilegedAccess("Invalid Credentials !");
		}

		User user = userService.findByUsername(userBean.getUsername());

		if (user == null || (user.getDeleted() != null && user.getDeleted() == true)) {
			throw new UnPrivilegedAccess("Access Denied !");
		} else if (user.getDeviceId() != null && !user.getDeviceId().equals(userBean.getDeviceId())) {
			throw new UnPrivilegedAccess("Unauthorised Device !");
		}

		final UserDetails userDetails = new SecureUser(user);

		String token = user != null ? tokenProvider.generateToken(userDetails) : null;

		logger.info("Operation complete! sending response ...");
		return ResponseEntity.ok(new AuthenticatedResponse(token, user));
	}

	/**
	 * @param userBean
	 * @return 401: Invalid Credentials, 200 -Success with token & user details
	 */
	@SuppressWarnings("unused")
	@PostMapping(Url.REGISTER)
	public ResponseEntity<?> register(@RequestBody UserDto userBean) throws UnPrivilegedAccess, DataValidityException {

		logger.info("Register hit ...");

		User user = userService.addUser(userBean);

		final UserDetails userDetails = new SecureUser(user);

		String token = user != null ? tokenProvider.generateToken(userDetails) : null;

		logger.info("Operation complete! sending response ...");
		return ResponseEntity.ok(new AuthenticatedResponse(token, user));
	}

}
