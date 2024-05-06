package com.ibm.springboot.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.ibm.springboot.demo")
public class App {
	
	private static final Logger LOG = LoggerFactory.getLogger(App.class);

	public static void main(String[] args) {
		System.out.println("start");
		LOG.info("Starting the application...");
		SpringApplication.run(App.class, args);
		
	}

}
