package com.ibm.day4.newfeatures;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.ibm.day3.obj.Employee;



public class StreamApiDemo {

	public static void main(String[] args) {

		List<Employee> empList = new ArrayList<>();

		empList.addAll(Arrays.asList(new Employee(101, "Sonu", 10.5), new Employee(102, "Monu", 12.5),
				new Employee(103, "Tonu", 11.5), new Employee(104, "Ponu", 13.5)));
        System.out.println("list of all employees");
		empList.forEach(System.out::println);
		System.out.println("list of all employees  with salary > 13");
	
		 //converting collection into a stream
		 //filter method-
	    empList.stream().filter(emp -> emp.getSalary()>13).forEach(System.out::println);
        empList.stream().filter(emp -> emp.getSalary()>13).count();
        
        System.out.println("list of only first n employees:");
		empList.stream().limit(2).forEach(System.out::println);

		System.out.println("list of employees except first n:");
		empList.stream().skip(2).forEach(System.out::println);

		System.out.println("list of first n1 to n2 employees:");
		empList.stream().skip(1).limit(2).forEach(System.out::println);
		 
		
	}

}