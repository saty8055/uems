package com.hss.uems.repo;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hss.uems.entity.security.Token;

@Repository
public interface TokenRepo extends JpaRepository<Token, String>{

	/**
	 * @param expiryDate
	 * @descirption delete every token created before the given date
	 * */
	@Transactional
	public void deleteByCreatedOnBefore(Date expiryDate);
	
	/**
	 * @param key
	 * @return Token Entity associated with the given key
	 * */
	@Query("select t from Token t where t.token=:key")
	public Token getToken(String key);
	
}
