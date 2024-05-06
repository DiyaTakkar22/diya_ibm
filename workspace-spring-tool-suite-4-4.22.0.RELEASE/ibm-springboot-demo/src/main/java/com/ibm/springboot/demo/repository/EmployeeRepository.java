package com.ibm.springboot.demo.repository;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;



import com.ibm.springboot.demo.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee,String> {
  //no need to define methods for basic crud operations
	
	public abstract List<Employee> findByFirstName(String firstName);

	public abstract Optional<Employee> findById(String employeeId);

	public abstract void deleteById(String employeeId);
}
