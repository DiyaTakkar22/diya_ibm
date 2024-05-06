class Employee{
    employeeId;
    firstName;
    salary;
   
    constructor(employeeId,firstName,salary){
            this.employeeId=employeeId;
            this.firstName=firstName;
            this.salary=salary;
    };

    printEmpData=()=>{
        return `Employee: employeeId: ${this.employeeId} firstName:${this.firstName} salary:${this.salary} `;
    }

    
};
// Employee employee=new Employee();  -java
//in javascript:

const employee1=new Employee(101,"diya",10.5);
console.log(employee1.printEmpData());
const employee2=new Employee();
console.log(employee2.printEmpData());