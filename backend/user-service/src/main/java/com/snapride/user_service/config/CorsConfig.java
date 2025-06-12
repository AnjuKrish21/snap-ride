package com.snapride.user_service.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200",
                        "http://localhost:4201") // your frontend origin
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

}
