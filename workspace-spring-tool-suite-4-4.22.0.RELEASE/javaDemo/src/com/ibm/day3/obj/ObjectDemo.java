package com.ibm.day3.obj;

public class ObjectDemo {
      public static void main(String[] args) {
    	  Employee emp=new Employee(1,"Sonu",10.5);
    	  emp.setSalary(11.5);
    	  System.out.println(emp.getSalary());
      }
}
