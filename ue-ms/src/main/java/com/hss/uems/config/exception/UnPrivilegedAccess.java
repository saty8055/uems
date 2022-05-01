package com.hss.uems.config.exception;

/**
 * @descrition Exception to be thrown if tried to access unavailable property..
 * */
@SuppressWarnings("serial")
public class UnPrivilegedAccess extends Exception{

	public UnPrivilegedAccess(String message) {
		super(message);
	}
	
}