package com.surgepricing.demo.controller;


import com.surgepricing.demo.dto.RideResponse;
import com.surgepricing.demo.service.RideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rides")
public class RideController {

    @Autowired
    RideService rideService;

    @GetMapping("/surge")
    public RideResponse getRide(){
        return  rideService.getSurgeRides();
    }
}
