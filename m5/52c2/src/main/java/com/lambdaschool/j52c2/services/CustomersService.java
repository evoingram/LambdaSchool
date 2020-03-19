package com.lambdaschool.j52c2.services;

public interface CustomersService {
    List<Customer> findAll();

    Customer findCustomerById(long id);

    Customer findCustomerByName(String name);

    Customer findCustomerByTelephone(String telephone);

    Customer delete(long id);

    Customer save(Customer customer);

    Customer update(Customer customer, long id);
}
