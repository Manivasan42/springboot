package com.jrishmani.SpringMicroServices.configuration;

import com.jrishmani.SpringMicroServices.service.EmpService;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmpConfigure {
@Bean
    public EmpService employeeBean()
{
    return new EmpService();
}
@Bean
    public EmpService modelMapperBean(){
    return new EmpService();
}
}
