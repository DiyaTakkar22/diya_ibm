package com.ibm.springboot.demo.service;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestConsumeService {

	
	
	RestTemplate restTemplate=new RestTemplate();
	
	public String getData() {
		String apiUrl = "https://jsonplaceholder.typicode.com/posts/22";

		return restTemplate.getForObject(apiUrl, String.class);
	}
}
