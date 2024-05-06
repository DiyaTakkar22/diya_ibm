package com.spring.demo.singleton;

//The Singleton design pattern in Java ensures that a class has only one instance 
//and provides a global point of access to that instance
public class Prime {
	// Private static instance variable
  private static Prime instance;
  
  // Private constructor to prevent instantiation from outside
  private Prime() {
	  
  }
  // Public static method to get the instance
  public static Prime getInstance() {
      // Lazy initialization: create the instance if it doesn't exist yet
      if (instance == null) {
          instance = new Prime();
      }
      return instance;
  }

  
}
