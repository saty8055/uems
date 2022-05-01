package com.hss.uems.entity.security;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.hss.uems.config.exception.UnPrivilegedAccess;
import com.hss.uems.entity.User;


/**
 * @description SecureUser layer for implementation of UserDetails used by Spring Security
 * */
@SuppressWarnings("serial")
@Component
public class SecureUser implements UserDetails{

	public SecureUser() {}
	
	private String username,password,role;
	
	public SecureUser(User user) throws UnPrivilegedAccess {
		if(user==null)
			throw new UnPrivilegedAccess("Invalid Credentials !") {};
		this.username=user.getUsername();
		this.password=user.getPassword();
		this.role=user.getRole();
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_"+role.toUpperCase()));
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}


}
