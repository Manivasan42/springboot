package com.example.demo.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeService empser;
	@GetMapping("/getall")
	public List<Employee>getAllEmployee()
	{
	  return empser.getEmployeeDetails();
	} 
	
	@PostMapping("/addEmployee")
	public  Employee save(@RequestBody Employee employees)
	{
		return empser.saveOrUpdate(employees);
	}
	
	@GetMapping("/getId/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        Employee employee = empser.getEmployeeById1(id);
        return employee;
    }
//	@PutMapping("/updateEmployee")  
//	public String update(@RequestBody Employee employee )   
//	{  
//		empser.saveOrUpdate(employee);  
//	return "updated successfully";  
//	}  

	 @PutMapping("/updateEmployee/{id}")
	    public ResponseEntity<Employee> updateEmployee(
	        @PathVariable Long id,
	        @RequestBody Employee updatedEmployee
	    ) {
	        Employee updated = empser.updateEmployee(id, updatedEmployee);
	        return ResponseEntity.ok(updated);
	    }
	 
	 @DeleteMapping("/deleteEmployee/{id}")
	    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
		 empser.deleteEmployeeById(id);
	        return ResponseEntity.ok("Employee deleted successfully");
	    }
}

