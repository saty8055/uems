package com.hss.uems.config.constants;

/**
 * @description Interface to declare Access/ Permission related constants
 */
public interface Pass {

	String ACCESS_TO = "hasAnyRole('";
	
	String AFTER_VERIFICATION = "')";
	
	String OR = "','";

	String ROLE_ADMIN = "ADMIN";
	
	String ROLE_AUDITOR = "AUDITOR";

	String ROLE_OWNER = "OWNER";

	String ROLE_DIVISION_MANAGER = "DIVISION_MANAGER";

	String ROLE_OPERATION_HEAD = "OPERATION_HEAD";
	
	String ROLE_STORE_MANAGER = "STORE_MANAGER";
	
	String ROLE_ANY = ROLE_ADMIN + OR + ROLE_AUDITOR + OR + ROLE_OWNER + OR + ROLE_DIVISION_MANAGER + OR + ROLE_OPERATION_HEAD + OR + ROLE_STORE_MANAGER;
	
}
