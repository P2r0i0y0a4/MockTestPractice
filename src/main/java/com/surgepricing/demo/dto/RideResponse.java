package com.surgepricing.demo.dto;

import com.surgepricing.demo.entity.Ride;
import lombok.*;

import java.util.List;

@Setter
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RideResponse {

    private int totalRides;
    private double totalFare;
    private List<Ride> surgeRides;
}
