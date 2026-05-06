package com.surgepricing.demo.service;


import com.surgepricing.demo.dto.RideResponse;
import com.surgepricing.demo.entity.Ride;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class RideService {

    List<Ride> ride= Arrays.asList(
            new Ride(1 ,200, true,80),
            new Ride(2,250.0,false,60),
            new Ride (3,375.0,true,80)
    );


    public RideResponse getSurgeRides(){

      List<Ride> r1=  ride.stream()
                .filter(r->r.getDemand()>50)
                .filter(r->r.isPeakTime()==true)
                .map(r->
                        {
                            r.setFare(r.getFare()*1.25);
                            return r;
                        }).toList();

        int totalRides=r1.size();
        double totalFare= r1.stream().mapToDouble(Ride ::getFare).sum();

        return new RideResponse(totalRides,totalFare,r1);


    }


}
