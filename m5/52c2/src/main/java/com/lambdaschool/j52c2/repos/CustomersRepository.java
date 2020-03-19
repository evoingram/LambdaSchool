package com.lambdaschool.j52c2.repos;

import com.lambdaschool.j52c2.models.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomersRepository extends CrudRepository<Customer, Long> {
}