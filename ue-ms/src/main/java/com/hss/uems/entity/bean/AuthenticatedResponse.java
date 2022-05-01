package com.hss.uems.entity.bean;

public class AuthenticatedResponse {

	private String token;
	
	private Object user;

	public AuthenticatedResponse() {}
	
	public AuthenticatedResponse(String token, Object user) {
		this.token=token;
		this.user=user;
	}
	
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Object getUser() {
		return user;
	}

	public void setUser(Object user) {
		this.user = user;
	}
	
}
