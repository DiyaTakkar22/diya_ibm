package com.ibm.day2.multi;

public class ThreadClass extends Thread {
	@Override
	public void run() {
		printNums(); //the method you want to run parallel
	}
     void printNums() {
    	 for(int i=1;i<=10;i++) {
    		 System.out.println(i);
    		 try {
    			 Thread.sleep(500); //execution slows down
    		 }
    		 catch(InterruptedException e){
    			 e.printStackTrace();
    		 }
    	 }
     }
}
