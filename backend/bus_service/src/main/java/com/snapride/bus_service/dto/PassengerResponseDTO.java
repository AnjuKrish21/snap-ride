package com.snapride.bus_service.dto;

import lombok.Data;

public class PassengerResponseDTO {

    private Long id;
    private String fullName;
    private Long mobile;
    private String email;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Long getMobile() {
        return mobile;
    }

    public String getEmail() {
        return email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

}
