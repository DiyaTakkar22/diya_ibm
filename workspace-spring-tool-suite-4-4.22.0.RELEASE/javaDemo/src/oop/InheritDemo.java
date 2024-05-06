package oop;

public class InheritDemo {
	public static void main(String[] args) {
    Phone phone1=new Phone();
    
    phone1.call();
    phone1.sms();

    SmartPhone phone2=new SmartPhone();
    System.out.println("smart phone");
    phone2.call();
    phone2.sms();
    phone2.camera();
    
    SuperSmartPhone phone3 = new SuperSmartPhone();
	System.out.println("super smart phone");
	phone3.call();
	phone3.sms();
	phone3.camera();
    
	}
}
