package com.hss.uems.service.common.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Function;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.hss.uems.config.constants.EncryptMode;
import com.hss.uems.config.constants.Library;
import com.hss.uems.config.constants.Random;
import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.entity.User;


/**
 * @description A Utility Service to perform some fundamental operations related
 *              to String...
 */
@Service
public class UtilServiceImpl implements UtilService {

	/**
	 * @param mail in string format
	 * @return true / false based on whether the mail is valid
	 */
	@Override
	public boolean validateMail(String mail) {
		String format = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
		boolean stat = Pattern.compile(format).matcher(mail).matches();
		return stat;
	}

	/**
	 * @param data : String to be broken, breakPoint : String supposed to be breaker
	 *        of data
	 * @return : List<String> i.e. a java.util.List object as collection of all the
	 *         data broken
	 */
	@Override
	public java.util.List<String> breakString(String data, String breakPoint) {

		// Get a new List object...
		java.util.List<String> brokenString = new java.util.ArrayList<String>();
		int i = 0;
		String temp = "";

		/*
		 * Traverse the whole string to create a sequence matching with the breakPoint &
		 * add to brokenString if matched
		 */
		for (i = 0; i < data.length(); i++) {
			temp = temp + data.charAt(i);
			String myTem = "";
			for (int index = 0; (index < breakPoint.length()) && (i + index < data.length()); index++) {
				myTem = myTem + data.charAt(i + index);
			}
			if (myTem.equals(breakPoint)) {
				brokenString.add(temp.substring(0, temp.length() - 1));
				i += breakPoint.length() - 1;
				temp = "";
			}
		}

		// Add the last left String as the last element of List...
		brokenString.add(temp);

		return brokenString;
	}

	private StringBuilder randomValue;

	/**
	 * @param prefix: String supposed to be starter of the Random Text Generated,
	 *        mode: enum supposed to present the mode of random text, size: integer
	 *        for the size of random text
	 * @return String a Random Text Code...
	 */
	@Override
	public String random(String prefix, Random mode, Integer size) {
		// Initialise the random value to prefix...
		randomValue = new StringBuilder(prefix);

		// Get a Key of which the Random value will be extracted...
		String key = "";

		// Initialise the key based on the mode of the service requirement...
		if (mode == Random.ALPHANUMERIC)
			key = Library.UPPER_ALPHABETS + Library.NATURAL_NUMBERS;
		else if (mode == Random.MISCELLANEOUS)
			key = Library.UPPER_ALPHABETS + Library.NATURAL_NUMBERS + Library.LOWER_ALPHABETS;
		else if (mode == Random.UPPER)
			key = Library.UPPER_ALPHABETS;
		else if (mode == Random.LOWER)
			key = Library.LOWER_ALPHABETS;
		else if (mode == Random.NUMERIC)
			key = Library.NATURAL_NUMBERS;
		else
			return "";

		// Get the object of java.util.Random
		java.util.Random utilRandom = new java.util.Random();

		/*
		 * Iterate size times to extract an element from key & append to the randomValue
		 */
		for (int i = 0; i < size; i++) {
			randomValue.append(key.charAt(utilRandom.nextInt(key.length())));
		}

		return randomValue.toString();
	}

	/**
	 * @return HttpServletRequest Object if in a Spring web context, null otherwise
	 */
	@Override
	public HttpServletRequest getRequest() {
		ServletRequestAttributes pool = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
		HttpServletRequest request;
		if (pool != null)
			request = pool.getRequest();
		else
			request = null;
		return request;
	}

	/**
	 * @param string to encrypt, mode of encryption...
	 * @return SHA-256, or SHA-512 encrytion of string depending on the mode passed
	 */
	@Override
	public String encodeSha(String string, EncryptMode mode) throws NoSuchAlgorithmException {

		String sha = mode.toString();

		// convert string to bytes array
		byte[] seq = string.getBytes();

		// Get StringBuffer & MessageDigest instance..
		StringBuffer hex = new StringBuffer();
		MessageDigest algorithm = MessageDigest.getInstance(sha);
		algorithm.reset();
		algorithm.update(seq);

		// Get the encrypted element as byte array & store in stringBuffer
		byte[] messageDigest = algorithm.digest();
		for (int i = 0; i < messageDigest.length; i++) {
			String temp = Integer.toHexString(0xFF & messageDigest[i]);
			if (temp.length() == 1)
				hex.append("0");
			hex.append(temp);
		}

		// return string of stored in stringBuffer...
		return hex.toString();
	}

	/**
	 * @param date, number of days to add...
	 * @return new date after adding the given number of days...
	 * */
	@Override
	public Date addDays(Date date, Integer days) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.DATE, days);
		return calendar.getTime();
	}

	@Override
	public String addDaysAsString(String date, Integer days) throws ParseException {
		Date given = this.getDate(date);
		Date added = addDays(given, days);
		DateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		return format.format(added);
	}

	@Override
	public String addDaysAsString(String date, Integer days, boolean american) throws ParseException {
		if(!american)
			return this.addDaysAsString(date, days);
		else{
			Date given = this.getDate(date, true);
			Date added = addDays(given, days);
			DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			return format.format(added);
		}
	}

	@Override
	public String getDateAsString(Date date){
		DateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		return format.format(date);
	}

	@Override
	public String getDateAsString(Date date, boolean american){
		if(!american)
			return this.getDateAsString(date);
		else {
			DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			return format.format(date);
		}
	}

	@Override
	public String addDaysAsString(Date given, Integer days) throws ParseException {
		Date added = addDays(given, days);
		DateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		return format.format(added);
	}

	@Override
	public Date getDate(String date) throws ParseException {
		String sDate1=date;
		Date date1=new SimpleDateFormat("dd-MM-yyyy").parse(sDate1);
		return date1;
	}

	@Override
	public Date getDate(String date, boolean american) throws ParseException {
		if(!american)
			return this.getDate(date);
		else{
			String sDate1=date;
			Date date1=new SimpleDateFormat("yyyy-MM-dd").parse(sDate1);
			return date1;
		}
	}

	@Override
	public List<String> getDateTrail(String startDate, String stopDate, Integer maxDays) throws ParseException, DataValidityException {
		List<String> dates = new ArrayList<>();
		Date dateOne = this.getDate(startDate, true);
		if(maxDays == null)
			maxDays = -1;
		Date dateLimit = this.addDays(dateOne, maxDays);
		Date dateTwo = this.getDate(stopDate, true);
		if(!dateLimit.after(dateTwo) && maxDays>=0) {
			throw new DataValidityException("Maximum " + maxDays + " days allowed !");
		}
		for(int i = 0; i < maxDays; i++){
			Date current = addDays(dateOne, i);
			if(current.after(dateTwo))
				break;
			DateFormat format = new SimpleDateFormat("dd-MM-yyyy");
			System.out.println("Sending "+current);
			dates.add(format.format(current));
		}
		return dates;
	}

	/**
	 * @return HttpSession Object for the session...
	 * */
	@Override
	public HttpSession session() {
		return this.getRequest().getSession();
	}

	/**
	 * @return User entity authorised for the current session...
	 * */
	@Override
	public User user() {
		return (User) this.session().getAttribute(Library.USER);
	}
	
	/**
	 * @param user
	 * @description authorise user for the current session...
	 * */
	@Override
	public void authorise(User user) {
		this.session().setAttribute(Library.USER, user);
	}
	
	/**
	 * @param time in format hh:mm
	 * @return Date with time pointing to the given one
	 * */
	@Override
	public Date dateAtTime(String time) {
		List<String> times=this.breakString(time, ":");
		Integer hour=Integer.parseInt(times.get(0));
		Integer minute=Integer.parseInt(times.get(1));
		Calendar calendar=Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.set(Calendar.HOUR_OF_DAY, hour);
		calendar.set(Calendar.MINUTE, minute);
		return calendar.getTime();
	}
	
	/**
	 * @param origin & destination date
	 * @return difference in minutes
	 * */
	@Override
	public Integer differenceInMinutes(Date origin, Date current) throws DataValidityException {
		Calendar org=Calendar.getInstance();
		Calendar curr=Calendar.getInstance();
		org.setTime(origin);
		curr.setTime(current);
		Integer diff=0;
		diff += curr.get(Calendar.HOUR_OF_DAY) - org.get(Calendar.HOUR_OF_DAY);
		if(diff<0)
			throw new DataValidityException("Time is earlier than expected");
		else {
			if(curr.get(Calendar.MINUTE) < org.get(Calendar.MINUTE)) {
				diff--;
				diff *= 60;
				diff += org.get(Calendar.MINUTE) - curr.get(Calendar.MINUTE);
			}
			else {
				diff *= 60;
				diff += curr.get(Calendar.MINUTE) - org.get(Calendar.MINUTE);
			}
		}
		return diff;
	}
	
	/**
	 * @param time in hh:mm format
	 * @description validates if the given time is valid or not
	 * */
	@Override
	public void validateMinutes(String time) throws DataValidityException {
		
		if(time == null || time.trim().equals(""))
			throw new DataValidityException("Not a valid time !");
		
		List<String> times = this.breakString(time, ":");
		if(times.size()!=2)
			throw new DataValidityException("Not a valid time !");
		
		for(String t:times) {
			try {
				Integer.parseInt(t);
			}
			catch(NumberFormatException e) {
				throw new DataValidityException("Not a valid time !");
			}
		}
		
	}

	@Override
	public boolean before(Date first, Date second){
		if(first.compareTo(second)>0)
			return false;
		return true;
	}

	@Override
	public boolean after(Date first, Date second){
		if(first.compareTo(second)>0)
			return true;
		return false;
	}

	@Override
	public Sort getSort(String sortField, String direction){
		Sort sort = Sort.by(sortField).descending();
		if(direction!=null && direction.equalsIgnoreCase("ASC"))
			sort = Sort.by(sortField).ascending();
		return sort;

	}

	@Override
	public <T> Page<T> getPageDTO(Page page, List<T> content){
		return new Page<T>() {
			@Override
			public int getTotalPages() {
				return page.getTotalPages();
			}

			@Override
			public long getTotalElements() {
				return page.getTotalElements();
			}

			@Override
			public <U> Page<U> map(Function<? super T, ? extends U> converter) {
				return page.map(converter);
			}

			@Override
			public int getNumber() {
				return page.getNumber();
			}

			@Override
			public int getSize() {
				return page.getSize();
			}

			@Override
			public int getNumberOfElements() {
				return page.getNumberOfElements();
			}

			@Override
			public List<T> getContent() {
				return content;
			}

			@Override
			public boolean hasContent() {
				return page.hasContent();
			}

			@Override
			public Sort getSort() {
				return page.getSort();
			}

			@Override
			public boolean isFirst() {
				return page.isFirst();
			}

			@Override
			public boolean isLast() {
				return page.isLast();
			}

			@Override
			public boolean hasNext() {
				return page.hasNext();
			}

			@Override
			public boolean hasPrevious() {
				return page.hasPrevious();
			}

			@Override
			public Pageable nextPageable() {
				return page.nextPageable();
			}

			@Override
			public Pageable previousPageable() {
				return page.previousPageable();
			}

			@Override
			public Iterator<T> iterator() {
				return content.iterator();
			}
		};
	}


}
