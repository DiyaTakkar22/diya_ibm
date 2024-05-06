package com.ibm.springboot.demo.service;

import java.util.List;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ibm.springboot.demo.exceptions.EmployeeNotFoundException;
import com.ibm.springboot.demo.model.Employee;
import com.ibm.springboot.demo.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public Page<Employee> getEmployeePages(Integer page, Integer size, String sortBy) {
		PageRequest pageable = PageRequest.of(page, size, Sort.by(sortBy));
		return employeeRepository.findAll(pageable);
	}


	@Override
	public List<Employee> getAllEmployees() {
		LOG.info("getAllEmployees");
		employeeRepository.count();
		
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(String employeeId) {
		//Optional: This indicates that the method may not find a user with the given ID, 
		//in which case it will return an empty Optional.
		LOG.info("employee");
		Optional<Employee> emOptional=employeeRepository.findById(employeeId);
		if(emOptional.isEmpty()) {
			String errMessage="Employee with the id" +employeeId+"not found";
			LOG.warn(errMessage);		
			throw new EmployeeNotFoundException(errMessage);
			
		}
		else {
			return emOptional.get();
		}
//		LOG.info(objectId.toString());
//		return employeeRepository.findById(objectId).get();
	}

	@Override
	public Employee addEmployee(Employee employee) {
		LOG.info(employee.toString());
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		LOG.info(employee.toString());
		return employeeRepository.save(employee);
	}

	@Override
	public Employee deleteEmployee(String employeeId) {
		Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
	    Employee employee = optionalEmployee.get();
	    employeeRepository.deleteById(employeeId);
	    return employee;
		
	}

	@Override
	public List<Employee> getEmployeeByFirstName(String firstName) {
		LOG.info(firstName);
		List<Employee> empList = employeeRepository.findByFirstName(firstName);
		if (empList.isEmpty()) {
			String errorMessage = "Employee with firstName " + firstName + " is not found!";
			LOG.warn(errorMessage);
			throw new EmployeeNotFoundException(errorMessage);
		}
		return empList;
	}
	
	public void emailServiceMethod() {
		LOG.info("sendEmail");
	}


}

//package com.ibm.springboot.demo.service;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Service;
//
//import com.ibm.springboot.demo.model.Employee;
//
//@Service
//public class EmployeeServiceImpl implements EmployeeService {
//
//	private final Logger LOG = LoggerFactory.getLogger(this.getClass());
//
//	private List<Employee> empList = new ArrayList<>(
//			Arrays.asList(new Employee(101, "Sonu", (double) 90000), new Employee(102, "Monu", (double) 99000),
//					new Employee(103, "Tonu", (double) 2000), new Employee(104, "Gonu", (double) 89000)));
//
//	@Override
//	public Employee getEmployeeById(Integer employeeId) {
//		LOG.info(employeeId.toString());
////		LOG.warn(employeeId.toString());
////		LOG.error(employeeId.toString());
//		return empList.stream().filter(emp -> emp.getEmployeeId().equals(employeeId)).findFirst().orElse(null);
//	}
//
//	@Override
//	public List<Employee> getAllEmployees() {
//		LOG.info("getAllEmployees");
//		return empList;
//	}
//
//	@Override
//	public Employee addEmployee(Employee employee) {
//		LOG.info(employee.toString());
//		empList.add(employee);
//		return employee;
//	}
//
//	@Override
//	public Employee updateEmployee(Employee employee) {
//		LOG.info(employee.toString());
//		return empList.set(empList.indexOf(getEmployeeById(employee.getEmployeeId())), employee);
//	}
//
//	@Override
//	public Employee deleteEmployee(Integer employeeId) {
//		LOG.info(employeeId.toString());
//		Employee empToDelete = getEmployeeById(employeeId);
//		empList.remove(empToDelete);
//		return empToDelete;
//	}
//
//}