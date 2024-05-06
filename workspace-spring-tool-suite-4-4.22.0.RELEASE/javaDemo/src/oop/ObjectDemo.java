

public class ObjectDemo {

	public static void main(String[] args) {
		
		Employee emp1 = new Employee(); //object creation
		emp1.employeeId = 101;
		emp1.firstName = "Sonu";
		emp1.salary = 10.5;
		System.out.println(emp1.getEmployeeData());
		
		Employee emp2 = new Employee();
		emp2.employeeId = 102;
		emp2.firstName = "Monu";
		emp2.salary = 10.75;
		System.out.println(emp2.getEmployeeData());

		Employee emp3 = new Employee(103,"Tonu",12.25);
		System.out.println(emp3.getEmployeeData());
	}

}
