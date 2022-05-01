package com.hss.uems.config.security;

import java.io.IOException;
import java.util.NoSuchElementException;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;

import com.hss.uems.entity.bean.ErrorResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.config.exception.DeleteDeniedException;
import com.hss.uems.config.exception.NoSuchPropertyException;
import com.hss.uems.config.exception.UnPrivilegedAccess;

/**
 * @description Filter to catch any exception if thrown through over the
 *              application
 */
@ControllerAdvice
public class ExceptionFilter {

	Logger logger;

	@PostConstruct
	public void init() {
		logger = LoggerFactory.getLogger(this.getClass());
	}

	@ExceptionHandler(UnPrivilegedAccess.class)
	public ResponseEntity<ErrorResponse> handle(UnPrivilegedAccess ex, HttpServletResponse response) throws IOException {
		logger.error("UnPrivilegedAccess : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_UNAUTHORIZED, "UnAuthorized Access !" ));
	}

	@ExceptionHandler(NoSuchPropertyException.class)
	public ResponseEntity<ErrorResponse> handle(NoSuchPropertyException ex, HttpServletResponse response) throws IOException {
		logger.error("NoSuchPropertyException : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_BAD_REQUEST, "No such resource !" ));
	}

	@ExceptionHandler(AccessDeniedException.class)
	public ResponseEntity<ErrorResponse> handle(AccessDeniedException ex, HttpServletResponse response) throws IOException {
		logger.error("AccessDeniedException : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_FORBIDDEN, "Access Denied for the resource !" ));
	}

	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<ErrorResponse> handle(NoSuchElementException ex, HttpServletResponse response) throws IOException {
		logger.error("NoSuchElementException : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_NOT_FOUND, "No Entity Present with the key !" ));
	}

	@ExceptionHandler(DataValidityException.class)
	public ResponseEntity<ErrorResponse> handle(DataValidityException ex, HttpServletResponse response) throws IOException {
		logger.error("DataValidityException : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_BAD_REQUEST, ex.getMessage() ));
	}

	@ExceptionHandler(DeleteDeniedException.class)
	public ResponseEntity<ErrorResponse> handle(DeleteDeniedException ex, HttpServletResponse response) throws IOException {
		logger.error("DeleteDeniedException : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_BAD_REQUEST, ex.getMessage() ));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorResponse> handler(Exception ex, HttpServletResponse response) throws IOException {
		logger.error("Exception : " + ex.getMessage(), ex);
		return ResponseEntity.ok(new ErrorResponse(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Internal Server Error" ));
	}
}
