package com.hss.uems.service.common.template;

import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.hss.uems.config.constants.Marker;
import com.hss.uems.service.common.utils.UtilService;

import freemarker.core.ParseException;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

/**
 * @description service to perform template ops...
 */
@Service
public class TemplateServiceImpl implements TemplateService {

	@Value("${app.base}")
	private String appRoot;

	@Autowired
	private UtilService utilService;

	@Autowired
	private Marker marker;

	private Configuration config;

	@PostConstruct
	public void init() throws IOException {
		this.config = configure();
	}

	private Configuration configure() throws IOException {
		Configuration config = new Configuration(Configuration.VERSION_2_3_29);
		config.setDirectoryForTemplateLoading(new File(appRoot + "/templates"));
		return config;
	}

	@Override
	public String getHtml(String ftlName, Map<String, Object> data) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException {
		data.put("marker", marker);
		StringWriter writer = new StringWriter();
		config.getTemplate(ftlName).process(data, writer);
		return writer.toString();
	}

	@Override
	public String getHtml(String ftlName, String key, Object object) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException {
		Map<String, Object> data = new HashMap<>();
		data.put(key, object);
		return this.getHtml(ftlName, data);
	}

	@Override
	public String resetPassword(String url, String fullName) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException {
		Map<String, Object> data = new HashMap<>();
		data.put("url", url);
		data.put("name", utilService.breakString(fullName, " ").get(0));
		return this.getHtml("reset.ftlh", data);
	}

	@Override
	public String getWelcomeMessage(String fullName, String role) throws TemplateNotFoundException,
			MalformedTemplateNameException, ParseException, TemplateException, IOException {
		Map<String, Object> data = new HashMap<>();
		data.put("role", role);
		data.put("name", utilService.breakString(fullName, " ").get(0));
		return this.getHtml("welcome.ftlh", data);
	}

}
