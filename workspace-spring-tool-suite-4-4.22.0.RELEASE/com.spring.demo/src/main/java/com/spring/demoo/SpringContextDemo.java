package com.spring.demoo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.spring.demo.Employee;

public class SpringContextDemo {
   public static void main(String[] args) {
	 
	   ApplicationContext applicationContext=new ClassPathXmlApplicationContext("SpringConfig.xml");
	   Employee emp1=applicationContext.getBean("employee1",Employee.class);
	   System.out.println(emp1.hashCode());
	   System.out.println(emp1.toString());
	   Employee emp2=applicationContext.getBean("employee",Employee.class);
	   System.out.println(emp1.hashCode());
	   System.out.println(emp2.toString());
	   ((AbstractApplicationContext) applicationContext).close();
	   
   }
}
