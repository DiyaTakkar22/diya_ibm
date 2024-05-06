//package com.ibm.springboot.demo.service;
//
//import java.util.List;
//
//
//import org.bson.types.ObjectId;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//
//
//import com.ibm.springboot.demo.model.Department;
//
//import com.ibm.springboot.demo.repository.DepartmentRepository;
//
//@Service
//public class DepartmentServiceImpl implements DepartmentService {
//   
//	private final Logger LOG = LoggerFactory.getLogger(this.getClass());
//	
//	@Autowired
//	DepartmentRepository departmentRepository;
//	
//	@Override
//	public List<Department> getAllDepartments(){
//		LOG.info("getAllDepartents");
//		return departmentRepository.findAll();
//	}
//
//	
//	@Override
//	public Department getDepartmentById(ObjectId departmentId) {
//		return departmentRepository.findById(departmentId).get();
//	}
//    
//	@Override
//	public  Department addDepartment(Department department) {
//		if(departmentRepository.existsById(department.getDepartmentId())) {
//			return departmentRepository.findById(department.getDepartmentId()).orElse(null);
//		}
//			
//		return  departmentRepository.save(department);
//	}
//	
//	@Override
//	public Department deleteDepartment(ObjectId departmentId) {
////		Department departmentToBeDeleted = this.getDepartmentId(departmentId);
//	    departmentRepository.deleteById(departmentId);
////	    return departmentToBeDeleted;
//	    return null;
//		
//	}
//	
//		@Override
//		public Department updateDepartment(String departmentName) {
//		
//			Department dept=departmentRepository.save(departmentName);
//			return dept; 
//		}
//}
//
//
//	
