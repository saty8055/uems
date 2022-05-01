package com.hss.uems.service.common.template;

import java.io.IOException;
import java.util.Map;

import freemarker.core.ParseException;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

public interface TemplateService {

	String getHtml(String ftlName, Map<String, Object> data) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException;

	String getHtml(String ftlName, String key, Object object) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException;

	String resetPassword(String url, String fullName) throws TemplateNotFoundException, MalformedTemplateNameException,
			ParseException, TemplateException, IOException;

	String getWelcomeMessage(String fullName, String role) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException;

}
