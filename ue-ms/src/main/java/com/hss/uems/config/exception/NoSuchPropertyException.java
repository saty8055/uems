package com.hss.uems.config.exception;

/**
 * @descrition Exception to be thrown if tried to access unavailable property..
 * */
@SuppressWarnings("serial")
public class NoSuchPropertyException extends Exception {

	public NoSuchPropertyException(String message) {
		super(message);
	}
	
}