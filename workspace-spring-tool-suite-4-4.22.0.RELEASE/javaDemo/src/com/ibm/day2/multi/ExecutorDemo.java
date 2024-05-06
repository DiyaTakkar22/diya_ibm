package com.ibm.day2.multi;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorDemo {
   public static void main(String[] args) {
	   ExecutorService executor=Executors.newFixedThreadPool(5);
	   
	   for(int i=1;i<=10;i++) {
		    Runnable obj= new Task("Task" + i);
		    executor.submit(obj);
	   }
	   executor.shutdown();
   }
}
