package com.hss.uems.web;

import com.hss.uems.config.constants.Url;
import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.config.exception.NoSuchPropertyException;
import com.hss.uems.entity.Booking;
import com.hss.uems.service.common.utils.UtilService;
import com.hss.uems.service.services.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

/**
 * @description controller service for App
 */
@CrossOrigin
@RestController
@RequestMapping(Url.SECURE_URL)
public class Controller {

    @Autowired
    Service service;

    @Autowired
    UtilService utilService;

    @GetMapping("/table/query")
    public ResponseEntity<?> list(@RequestParam String from, @RequestParam String to) throws NoSuchPropertyException, ParseException {
        return ResponseEntity.ok(service.findAvailable(utilService.getDate(from, true), utilService.getDate(to, true)));
    }

    @PostMapping("/booking")
    public ResponseEntity<?> book(@RequestBody Booking booking) throws DataValidityException {
        return ResponseEntity.ok(service.add(booking));
    }

    @GetMapping("/booking/mine")
    public ResponseEntity<?> mine(@RequestParam String sortBy, @RequestParam String sortDirection, @RequestParam Integer pageNumber, @RequestParam Integer pageSize) {
        return ResponseEntity.ok(service.findBookings(pageNumber, pageSize, sortDirection, sortBy));
    }

    @PutMapping("/booking/{bookingId}")
    public ResponseEntity<?> cancel(@PathVariable String bookingId) throws DataValidityException, NoSuchPropertyException {
        return ResponseEntity.ok(service.cancel(bookingId));
    }



}
