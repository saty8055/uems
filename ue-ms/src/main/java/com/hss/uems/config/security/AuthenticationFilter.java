package com.hss.uems.config.security;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.hss.uems.entity.User;
import com.hss.uems.entity.security.Token;
import com.hss.uems.service.common.utils.UtilService;


/**
 * @description Filter to validate & verify each request.
 * */
@Component
public class AuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	TokenProvider tokenProvider;

	@Autowired
	UserDetailsService userDetailsService;

	@Autowired
	UtilService utilService;
	
	Logger logger;
	
	@PostConstruct
	public void init() {
		logger=LoggerFactory.getLogger(this.getClass());
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		logger.info("Cache hit !");
		
		final String authorizationHeader = request.getHeader("X_ACCESS_TOKEN");

		Token token = null;
		String jwt = null;

		logger.info("Validating authorization header !");
		if (authorizationHeader != null) {

			jwt = authorizationHeader;
			try {
				logger.info("Extracting Token");
				token = tokenProvider.extractToken(jwt);
				logger.info("Extracted token !");
			} catch (Exception ex) {
				logger.error("Exception while extracting token", ex);
			}

		}

		logger.info("Validating Security Context !");
		if (token != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			
			logger.info("Extracting User from token !");
			User user=token.getUser();
			
			logger.info("Extracting user for "+user.getUsername());
			UserDetails userdetails = userDetailsService.loadUserByUsername(user.getUsername());
			
			logger.info("Authorising in the context !");
			UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(userdetails, null,
					userdetails.getAuthorities());
			authReq.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
			
			logger.info("Authorising in session !");
			utilService.authorise(user);
			
			SecurityContext sc = SecurityContextHolder.getContext();
			sc.setAuthentication(authReq);
			
		}

		logger.info("Passing the request !");
		filterChain.doFilter(request, response);
	}

}