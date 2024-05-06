package com.ibm.day2.multi;

public class ThreadDemo {
  public static void main(String[] args) {
	  ThreadClass obj= new ThreadClass();
	  obj.start(); //start method belongs to thread class
	  ThreadClass obj2=new ThreadClass();
	  obj2.start();
  }
}
