package com.madeeasy;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
                title = "SpringBoot-User-Service",
                version = "1.0",
				description = "This is a simple Spring Boot application to demonstrate how to create a RESTful API with Spring Boot",
				summary = "SpringBoot-User-Service"
        )
)
public class SpringBootUserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootUserServiceApplication.class, args);
	}
	/**
	 * here i have allowed all origins, methods and headers but when it will be deployed then it must have to
	 * restricted for a particular origin.
	 * @return
	 */
	@Bean
	public WebMvcConfigurer corsConfiguration() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				// Allow all origins, methods, and headers
				registry.addMapping("/**")
						.allowedOrigins("*")
						.allowedMethods("*")
						.allowedHeaders("*");
			}
		};
	}
}
