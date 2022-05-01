package com.hss.uems.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hss.uems.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String> {

	/**
	 * @param username
	 * @return User Entity related with the username
	 * */
	public User findByUsername(String username);

	/**
	 * @param username
	 * @return User Entity related with the email
	 * */
	public User findByEmail(String email);
	
	@Query("select u from User u where u.role='AUDITOR'")
	public List<User> getAuditors();
	
}
