package com.jrishmani.SpringMicroServices.controller;

import com.jrishmani.SpringMicroServices.model.Employee;
import com.jrishmani.SpringMicroServices.service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmpController {
    @Autowired
    private EmpService empService;

    private ResponseEntity<Employee>getEmployeeDetails (@PathVariable ("id") int id){
        Employee employee=empService.getEmployeeById(id);
        return  ResponseEntity.status(HttpStatus.OK).body(employee);
    }
}
