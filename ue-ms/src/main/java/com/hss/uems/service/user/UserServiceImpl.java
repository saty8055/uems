package com.hss.uems.service.user;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.hss.uems.config.constants.Roles;
import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.config.exception.UnPrivilegedAccess;
import com.hss.uems.entity.User;
import com.hss.uems.entity.bean.UserDto;
import com.hss.uems.entity.security.SecureUser;
import com.hss.uems.entity.security.Token;
import com.hss.uems.repo.TokenRepo;
import com.hss.uems.repo.UserRepo;
import com.hss.uems.service.common.utils.UtilService;

/**
 * @description service layer implementation for user level ops
 */
@Service
public class UserServiceImpl implements UserService, UserDetailsService {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private TokenRepo tokenRepo;

	@Autowired
	private UtilService utilService;

	private Logger logger;

	private BCryptPasswordEncoder encoder;

	/**
	 * @description a method to perform initialization at the time instance is
	 *              created for User Service
	 */
	@PostConstruct
	public void init() {
		this.encoder = new BCryptPasswordEncoder();
		this.logger = LoggerFactory.getLogger(this.getClass());

		/**
		 * @function to add the default user if there is none in DB
		 */
		if (userRepo.findAll().isEmpty()) {
			this.getPrimeUsers().forEach(user -> userRepo.save(user));
		}
	}

	/**
	 * @description overridden default method from UserDetailsService
	 */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		try {
			return new SecureUser(this.findByUsername(username));
		} catch (UnPrivilegedAccess e) {
			throw new UsernameNotFoundException("Invalid Credentials");
		}
	}

	/**
	 * @param username
	 * @return User Entity associated with the username
	 */
	@Override
	public User findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	@Override
	public List<User> getAuditors(){
		return userRepo.getAuditors();
	}
	
	/**
	 * @param user entity to be persisted
	 * @return User persisted in the DB
	 */
	@Override
	public User save(User user) throws DataValidityException {

		/** Validate if the mandatory fields are having a valid entry for DB */
		this.validateUser(user);

		/** validate username is unique. */
		this.validateUsername(user.getUsername());

		/** validate email is unique. */
		this.validateEmail(user.getEmail());

		return userRepo.save(user);
	}

	@Override
	public void addFcmToken(String fcmToken, String userId) {
		User user = userRepo.findById(userId).get();
		user.setFcmToken(fcmToken);
		userRepo.save(user);
	}

	/**
	 * @param user data
	 * @description Validate if the mandatory fields are having a valid entry for DB
	 */
	@Override
	public void validateUser(User user) throws DataValidityException {
		if (user.getUsername() == null || user.getUsername().trim().equals(""))
			throw new DataValidityException("Please provide a valid username !");

		if (user.getEmail() == null || user.getEmail().trim().equals("") || !utilService.validateMail(user.getEmail()))
			throw new DataValidityException("Please provide a valid e-mail!");

		if (user.getFullName() == null || user.getFullName().trim().equals(""))
			throw new DataValidityException("Please provide a valid name!");

		if (user.getPassword() == null || user.getPassword().trim().equals(""))
			throw new DataValidityException("Please provide a valid password!");
		else
			user.setPassword(encoder.encode(user.getPassword()));
	}

	/**
	 * @param username
	 * @description verify if username is unique & new to Database.
	 */
	@Override
	public void validateUsername(String username) throws DataValidityException {
		User user = null;
		try {
			user = userRepo.findByUsername(username);
		} catch (Exception ex) {
			ex.printStackTrace();
			user = null;
		}
		if (user != null)
			throw new DataValidityException("Username not available !");
	}

	/**
	 * @param email
	 * @description verify if e-mail is unique & new to Database.
	 */
	@Override
	public void validateEmail(String email) throws DataValidityException {
		User user = null;
		try {
			user = userRepo.findByEmail(email);
		} catch (Exception ex) {
			ex.printStackTrace();
			user = null;
		}
		if (user != null)
			throw new DataValidityException("e-mail not available !");
	}

	/**
	 * @param user entity to be updated
	 * @return User updated in the DB
	 */
	@Override
	public User update(User user) throws DataValidityException {

		User u = this.get(user.getUserId());
		u.setPassword(encoder.encode(user.getPassword()));
		return userRepo.save(u);

	}
	
	@Override
	public User addUser(UserDto dto) throws DataValidityException {
		User user = new User();
		validateEmail(dto.getEmail());
		user.setEmail(dto.getEmail());
		user.setUsername(dto.getUsername());
		validateUsername(user.getUsername());
		user.setFullName(dto.getFullName());
		user.setPassword(dto.getPassword());
		validateUser(user);
		user.setPassword(encoder.encode(dto.getPassword()));
		user.setRole(Roles.AUDITOR);
		return userRepo.save(user);
	}

	/**
	 * @param userId, oldPassword & newPassword
	 * @return User details after changing the password
	 */
	@Override
	public User changePassword(String userId, String newPassword, String oldPassword) throws DataValidityException {
		User u = this.get(userId);
		if (encoder.matches(oldPassword, u.getPassword())) {
			u.setPassword(newPassword);
			return this.update(u);
		} else
			throw new AccessDeniedException("Incorrect Password !");
	}

	/**
	 * @param userId...
	 * @return User entity associated with userId...
	 */
	@Override
	public User get(String userId) throws DataValidityException {
		try {
			User u = userRepo.findById(userId).get();
			if (u == null)
				throw new DataValidityException("No Such User !");
			return u;
		} catch (Exception ex) {
			throw new DataValidityException("No Such User !");
		}
	}

	/**
	 * @param user entity supposed to be deleted
	 * @description user is set as deactivated not to be accessed again
	 */
	@Override
	public void delete(User user) throws DataValidityException {
		User u = this.get(user.getUserId());
		u.setDeleted(true);
		userRepo.save(u);
	}

	/**
	 * @param user entity supposed to be deleted
	 * @description user is permanently deleted from the records
	 */
	@Override
	public void permanentDelete(User user) throws DataValidityException {
		User u = this.get(user.getUserId());
		userRepo.delete(u);
	}

	/**
	 * @param token entity...
	 * @return token entity synched with the DB...
	 */
	@Override
	public Token saveToken(Token token) {
		/** Invalidate all the sessions where the user was previously logged In... */
		if(!token.getUser().getRole().equals(Roles.DIVISION_MANAGER.toString()))
			this.resetPreviousSession(token.getUser().getUserId());

		/** Create the new token instance in DB */
		Calendar cal = Calendar.getInstance();
		Date date = cal.getTime();
		token.setCreatedOn(date);
		this.clearTokens();
		return tokenRepo.save(token);
	}

	/**
	 * @param userName for fresh login
	 * @description delete the previous session where the user was logged in
	 */
	private void resetPreviousSession(String userId) {
		logger.info("Clearing Previous Sessions for user " + userId);

		List<Token> tokens = tokenRepo.findAll();

		logger.info("Got " + tokens.size() + " tokens...");
		for (int i = 0; i < tokens.size(); i++)
			if (tokens.get(i).getUser().getUserId().equals(userId)) {
				logger.warn("User Already Logged In");
				tokenRepo.delete(tokens.get(i));
				logger.info("Previous Session Cleared...");
				break;
			}
	}

	/**
	 * @param token string...
	 * @return Token entity associated with String...
	 */
	@Override
	public Token getToken(String tokenString) {
		return tokenRepo.getToken(tokenString);
	}

	/**
	 * @param tokenString
	 * @description delete the mentioned token
	 */
	@Override
	public void deleteToken(String tokenString) {
		tokenRepo.delete(this.getToken(tokenString));
	}

	/**
	 * @param token ID...
	 * @return Token entity associated with ID...
	 */
	@Override
	public Token findToken(String tokenId) {
		return tokenRepo.findById(tokenId).get();
	}

	@Override
	public boolean isLoggedIn(String userId) {
		List<Token> tokens = tokenRepo.findAll().stream().filter(token -> token.getUser().getUserId().equals(userId))
				.collect(Collectors.toList());
		if(tokens!=null && tokens.size()>0) {
			return true;
		}
		return false;
	}

	/**
	 * @description delete all the tokens older than 30 days...
	 */
	public void clearTokens() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, -30);
		Date old = cal.getTime();
		tokenRepo.deleteByCreatedOnBefore(old);
	}

	/**
	 * @return the default user supposed to be super admin...
	 */
	private User getDefaultUser() {
		User user = new User();
		user.setFullName("RRS Admin");
		user.setEmail("rrs-org@gmail.com");
		user.setPassword(encoder.encode("allow"));
		user.setRole(Roles.ADMIN);
		user.setUsername("rrs-admin");
		return user;
	}

	private List<User> getPrimeUsers() {
		return Arrays.asList(this.getDefaultUser());
	}

}
