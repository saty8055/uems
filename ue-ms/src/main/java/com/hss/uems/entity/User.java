package com.hss.uems.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hss.uems.config.constants.Library;
import com.hss.uems.config.constants.Roles;
import com.hss.uems.config.exception.NoSuchPropertyException;

import java.util.List;

/**
 * @descrition Entity for User..
 * */
@Entity
public class User extends BaseEntity{

	public User() {
		
	}
	
	public User(String fullName, String username, String password, Roles role, String email) {
		this.fullName=fullName;
		this.username=username;
		this.password=password;
		this.role=role.toString();
		this.email=email;
	}
	
	@Id
	@GeneratedValue(generator = Library.UUID)
	@GenericGenerator(name = Library.UUID, strategy = Library.UUID_2)
	private String userId;
	
	private String username, email, fullName;
	
	private String role, deviceId;
	
	private String fcmToken;
	
	@JsonIgnore
	private String password;

	@OneToMany(mappedBy = Library.USER, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnoreProperties({Library.HIBERNATE_LAZY_INITIALIZER, Library.HANDLER })
	@JsonIgnore
	public List<Booking> bookings;

	public Boolean deleted;
		public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getRole() {
		return role;
	}

	public Roles role() throws NoSuchPropertyException {
		if(role.equals(Roles.ADMIN.toString()))
			return Roles.ADMIN;
		else if(role.equals(Roles.OWNER.toString()))
			return Roles.OWNER;
		else if(role.equals(Roles.DIVISION_MANAGER.toString()))
			return Roles.DIVISION_MANAGER;
		else if(role.equals(Roles.OPERATION_HEAD.toString()))
			return Roles.OPERATION_HEAD;
		else if(role.equals(Roles.STORE_MANAGER.toString()))
			return Roles.STORE_MANAGER;
		else if(role.equals(Roles.AUDITOR.toString()))
			return Roles.AUDITOR;
		else
			throw new NoSuchPropertyException("No Such Role !");
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
	public void setRole(Roles role) {
		this.role = role.toString();
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public String getFcmToken() {
		return fcmToken;
	}

	public void setFcmToken(String fcmToken) {
		this.fcmToken = fcmToken;
	}

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}
}