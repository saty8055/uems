package com.hss.uems.config.constants;

public interface Library {

	String APPLICATION_BASE = "/teapostutility";
	
	String CACHE_CONTROL = "Cache-Control";
	
	String CACHE_TIMEOUT = "max-age=2592000, must-revalidate, no-transform";
	
	String DIVISION = "division";

	String DIVISION_ID = "divisionId";

	String FORM = "forms";

	String FORM_ID = "formsId";

	String HANDLER = "handler";

	String HIBERNATE_LAZY_INITIALIZER = "hibernateLazyInitializer";

	String LOWER_ALPHABETS = "abcdefghijklmnpqrstuvwxyz";

	String MEDIA_BASE = APPLICATION_BASE + "/uploads";
	
	String NATURAL_NUMBERS = "123456789";
	
	String OPERATION_HEAD = "operationHead";

	String OPERATION_ID = "operationId";

	String PARAM = "param";

	String PARAM_ID = "paramId";

	String REPORT = "report";

	String REPORT_ID = "reportId";

	String ROOM = "room";

	String ROOM_ID = "roomId";

	String STORE = "store";

	String STORE_ID = "storeId";

	String TOKEN = "token";
	
	String TOKEN_ID = "tokenId";
	
	String UPPER_ALPHABETS = LOWER_ALPHABETS.toUpperCase();
	
	String USER = "user";
	
	String NOTIFICATION = "notification";
	
	String USER_ID = "userId";
	
	String UUID = "uuid";

	String UUID_2 = "uuid2";

	String VALUE = "reportValue";

	String VALUE_ID = "reportValueId";

}
