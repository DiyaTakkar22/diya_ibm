package practice;

//option 1-extending Thread class
//option 2-implementing runnable class

//setPriority method
//communication between threads

class Task1 extends Thread{
	public void run(){  // signature
		
		//Task1
				for(int i=1;i<199;i++) {
					System.out.print(i+" ");
				}	
				System.out.print("\n Task1 done");
				
				
	}
}

class Task2  implements Runnable{
	@Override
	public void run() {
		//Task 2
				for(int i=201;i<299;i++) {
					System.out.print(i+" ");
				}
				System.out.print("\n Task2 done");
	}
	
}
public class ThreadBasicsRunner {
	public static void main(String[] args) throws InterruptedException {

        System.out.println("\n Task 1 has kicked off");
		Task1 task1=new Task1();  //this code runs in parallel
		task1.setPriority(1);  //setPriority method
		task1.start();
		
		System.out.println("\n Task 2 has kicked off");
		Task2 task2=new Task2();
		Thread task2thread=new Thread(task2);
		task2thread.setPriority(10);
		task2thread.start();
		task1.join();
		System.out.println("\n Task 3 has kicked off");
		//Task 3
		for(int i=301;i<399;i++) {
			System.out.print(i+" ");
		}
		System.out.print("\n Task3 done");
		
	}

}
