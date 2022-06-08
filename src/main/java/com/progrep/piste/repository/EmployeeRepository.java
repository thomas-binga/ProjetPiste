package com.progrep.piste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.progrep.piste.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
