package com.surgepricing.demo.entity;


import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ride {

    private int id;
    private double fare;
    private boolean peakTime;
    private int demand;


}
