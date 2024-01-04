package com.jrishmani.SpringMicroServices.service;

import com.jrishmani.SpringMicroServices.model.Employee;
import com.jrishmani.SpringMicroServices.reository.EmpRepo;
import com.jrishmani.SpringMicroServices.response.EmpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;


import java.util.Optional;

@Service
public class EmpService {
    @Autowired
    private EmpRepo empRepo;
    @Autowired
    private EmpService  
}

