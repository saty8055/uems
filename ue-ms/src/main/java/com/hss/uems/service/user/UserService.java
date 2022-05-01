package com.hss.uems.service.user;

import java.util.List;

import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.entity.User;
import com.hss.uems.entity.bean.UserDto;
import com.hss.uems.entity.security.Token;

public interface UserService {

	User findByUsername(String username);

	User save(User user) throws DataValidityException;

	User update(User user) throws DataValidityException;

	User get(String userId) throws DataValidityException;

	void delete(User user) throws DataValidityException;

	void permanentDelete(User user) throws DataValidityException;

	Token saveToken(Token token);

	Token getToken(String tokenString);

	Token findToken(String tokenId);

	void validateUsername(String username) throws DataValidityException;

	void validateEmail(String email) throws DataValidityException;

	void validateUser(User user) throws DataValidityException;

	User changePassword(String userId, String newPassword, String oldPassword) throws DataValidityException;

	void deleteToken(String tokenString);

	void addFcmToken(String fcmToken, String userId);

	boolean isLoggedIn(String userId);

	User addUser(UserDto dto) throws DataValidityException;

	List<User> getAuditors();

}
