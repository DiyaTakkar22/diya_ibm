package com.ibm.springboot.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import com.ibm.springboot.demo.service.RestConsumeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController {
	


   @GetMapping("/hi")
   public String hi() {
	   System.out.println("hello world");
	   return "hello world";
   }
   @GetMapping("/hi2")
   public String hi2() {
	   System.out.println("hello world");
	   return "hello world";
   }
   
   @Autowired
   private RestConsumeService restConsumeService;
   
   @GetMapping("hello")
   public String hello() {
	   return restConsumeService.getData();
   }
   

	
}
