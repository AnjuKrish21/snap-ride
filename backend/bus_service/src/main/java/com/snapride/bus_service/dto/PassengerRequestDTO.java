package com.snapride.bus_service.dto;

import lombok.Data;

public class PassengerRequestDTO {

    private String fullName;
    private Long mobile;
    private String email;

    public String getFullName() {
        return fullName;
    }

    public Long getMobile() {
        return mobile;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }
}
