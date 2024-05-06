package com.ibm.day2.multi;

public class Task implements Runnable  {
	private String taskName;
	public Task(String taskName) {
		this.taskName=taskName;
	}
   @Override
   public void run() {
	   System.out.println("Task started: "+ taskName);
	   try {
		   Thread.sleep(500);
	   }
	   catch(InterruptedException e) {
		   e.printStackTrace();
	   }
	   System.out.println("Task completed: "+ taskName);
   }
}
