package com.jrishmani.SpringMicroServices.reository;

import com.jrishmani.SpringMicroServices.model.Employee;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpRepo extends JpaRepository<Employee,Integer> {
}
