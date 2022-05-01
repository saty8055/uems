package com.hss.uems.entity.bean;

public class ErrorResponse {

    public ErrorResponse(){

    }

    public ErrorResponse(Integer status, String message){
        this.status = status;
        this.message = message;
    }

    private Integer status;

    private final Boolean error = true;

    private String message, path;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Boolean getError() {
        return error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
