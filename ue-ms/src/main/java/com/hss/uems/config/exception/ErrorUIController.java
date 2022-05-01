package com.hss.uems.config.exception;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ErrorUIController implements ErrorController {

    // set default 404 to search for '/error' mapping
    @Override
    public String getErrorPath() {
        return "/error";
    }

    // map '/error' to index.html
    @RequestMapping("/error")
    public String handlerError() {
        return "index";
    }

}