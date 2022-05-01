package com.hss.uems.service.common.utils;

import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.hss.uems.config.constants.EncryptMode;
import com.hss.uems.config.constants.Random;
import com.hss.uems.entity.User;
import com.hss.uems.config.exception.DataValidityException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

/*
 * @author Satyam Pandey
 * @description service layer interface for utilities being used throughout the services
 * */
public interface UtilService {

	public boolean validateMail(String mail);

	String random(String prefix, Random mode, Integer size);

	List<String> breakString(String data, String breakPoint);

	HttpServletRequest getRequest();

	String encodeSha(String string, EncryptMode mode) throws NoSuchAlgorithmException;

	Date addDays(Date date, Integer days);

    String addDaysAsString(String date, Integer days) throws ParseException;

	String addDaysAsString(String date, Integer days, boolean american) throws ParseException;

	String getDateAsString(Date date);

	String getDateAsString(Date date, boolean american);

	String addDaysAsString(Date given, Integer days) throws ParseException;

    Date getDate(String date) throws ParseException;

	Date getDate(String date, boolean american) throws ParseException;

	List<String> getDateTrail(String startDate, String stopDate, Integer maxDays) throws ParseException, DataValidityException;

    public HttpSession session();

	User user();

	void authorise(User user);

	Date dateAtTime(String time);

	Integer differenceInMinutes(Date origin, Date current) throws DataValidityException;

	void validateMinutes(String time) throws DataValidityException;

    boolean before(Date first, Date second);

	boolean after(Date first, Date second);

	Sort getSort(String sortField, String direction);

    <T> Page<T> getPageDTO(Page page, List<T> content);
}
