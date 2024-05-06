package com.ibm.day4.newfeatures;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//1. functional interface
//2. lambda methods
//3. method reference
//4. Stream API

interface FunInt{
	void m1();
}
public class Java8NewFeatures {
    public static void main(String[] args) {
    
    	List<String> myFriends=new ArrayList<>();
    	myFriends.addAll(Arrays.asList("Sonu","Monu","Tonu"));
    	//It iterates over each element in the collection and 
    	//performs an action specified by the provided lambda expression or method reference.
    	myFriends.forEach(friend->System.out.println(friend));
    	
    	//method reference- to println
    	myFriends.forEach(System.out::println);
    	
    	
    	
    	
    	//lambda expression
    	FunInt obj=()->{
    		System.out.println("m1 invoked");
    		
    	};
    	obj.m1();
    	
    	
    	
    }
}
