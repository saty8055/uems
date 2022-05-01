package com.hss.uems.config.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.hss.uems.entity.security.Token;
import com.hss.uems.service.user.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @description Provider Service to create & Manage Tokens...
 * */
@Service
public class TokenProvider {

	@Autowired
	private UserService userService;
	
	/**
	 * @param UserDetails to generate token...
	 * @return Token as String associated with the given user...
	 * */
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, userDetails.getUsername());
	}

	/**
	 * @param claims, subject for token...
	 * @return Token associated with the user...
	 * */
	private String createToken(Map<String, Object> claims, String subject) {
		String tokenString=Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 30))
				.signWith(SignatureAlgorithm.HS256, Secrets.SIGNING_KEY).compact();
		Token token=new Token();
		token.setToken(tokenString);
		token.setUser(userService.findByUsername(subject));
		userService.saveToken(token);
		return tokenString;
	}

	/**
	 * @param token String...
	 * @return Token Entity associated with the string...
	 * */
	public Token extractToken(String tokenString) {
		return userService.getToken(tokenString);
	}
	
}
