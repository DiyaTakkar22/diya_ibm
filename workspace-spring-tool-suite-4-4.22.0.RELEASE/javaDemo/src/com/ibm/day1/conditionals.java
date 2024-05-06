package com.ibm.day1;

public class conditionals {
      public static void main(String[] args) {
    	  //if else loop
    	 int  num1= 10;
    	 int  num2=20;
    	  if(num1 > num2) {
    		  System.out.println("yes");
    	  }
    	  else {
    		  System.out.println("no");
    	  }
    	  
    	  //switch case
    	  String str="a";
    	  switch(str) {
    	  case "a":
    		  System.out.println("A");
    		  break;
    	  case "b":
    		  System.out.println("B");
    		  break;
    	  case "c":
    		  System.out.println("C");
    		  break;
    	  case "d":
    		  System.out.println("D");
    		  break;
    	
    		  
    	  }
    	 
    	  //for loop
    	  int[] marks= {99,98,100};
    	  for(int i=1;i<=5;i++) {
    		  System.out.println(i);
    	  }
    	  for(int mark:marks) {
    		  System.out.println(mark);
    		  
    	  }
    	  
    	  //do while loop
    	  int k=1;
    	  do {
    		  System.out.println(k);
    		  k++;
    	  }
    	  while(k<5);
    	  
    	  
    	  //nested loop
    	  for(int i=1;i<=5;i++) {
    		  for(int j=1;j<=1;j++) {
    			  System.out.println(i);
    		  }
    	  }
    	  
    	  
      }
}
