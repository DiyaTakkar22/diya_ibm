package practice;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Task extends Thread{
	private int number;
	public Task(int number) {
		this.number=number;
		
	}
	public void run() {
		System.out.print("\n Task" +number+" started");
		for(int i=number*100;i<=number*100 +99;i++) {
			System.out.print(i+" ");
		}	
		System.out.print("\n Task" +number+" done");
	}
}
public class ExecutorServiceRunner {
   public static void main(String[] args) {
//	   ExecutorService executorservice=Executors.newSingleThreadExecutor();
	   
	   ExecutorService executorservice=Executors.newFixedThreadPool(5);
//	   executorservice.execute(new Task1());
//	   executorservice.execute(new Thread(new Task1()));
	   executorservice.execute(new Task(1));
	   executorservice.execute(new Task(2));
	   executorservice.execute(new Task(3));
	   executorservice.execute(new Task(4));
	   executorservice.shutdown();
}
}