package com.lambdaschool.j52c2.controllers;

import com.lambdaschool.j52c2.models.Customer;
import com.lambdaschool.j52c2.services.CustomerService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

// CUSTOMERS (custcode, custname, custcity, workingarea, custcountry, grade, openingamt, receiveamt, paymentamt, outstandingamt, phone, agentcode)
@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // GET all customers
    // http://localhost:2019/customers/customers
    @GetMapping(value = "/customers/customers",
            produces = {"application/json"})
    public ResponseEntity<?> listAllCustomers(){

        List<Customer> myCustomers = customerService.findAll();
        return new ResponseEntity<>(myCustomers, HttpStatus.OK);
    }

    // GET one customer by id
    // http://localhost:2019/customers/customer/{customerid}
    @GetMapping(value = "/customer/{customerId}",
            produces = {"application/json"})
    public ResponseEntity<?> getCustomerById(@PathVariable Long customerId) {
        Customer r = customerService.findCustomerById(customerId);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // GET one customer by name
    // http://localhost:2019/customers/customer/{customerName}
    @GetMapping(value = "/customer/name/{customerName}",
            produces = {"application/json"})
    public ResponseEntity<?> getCustomerByName(@PathVariable String customerName) {
        Customer r = customerService.findCustomerByName(customerName);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // GET one customer by telephone
    // http://localhost:2019/customers/customer/{customerPhone}
    @GetMapping(value = "/customer/phone/{customerPhone}",
            produces = {"application/json"})
    public ResponseEntity<?> getCustomerByTelephone(@PathVariable String customerPhone) {
        Customer r = customerService.findCustomerByTelephone(customerPhone);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // GET /customers/orders - Returns all customers with their orders
    // GET /customers/customer/{id} - Returns the customer and their orders with the given customer id
    // GET /customers/namelike/{likename} - Returns all customers and their orders with a customer name containing the given substring

    // DELETE one customer
    // http://localhost:2019/customers/customer/{customerid}
    @DeleteMapping(value = "/customer/{customerId}")
    public ResponseEntity<?> deleteCustomerById(@PathVariable Long customerId) {
        customerService.delete(customerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // PUT one customer
    // http://localhost:2019/customers/customer/{customerid}
    @PutMapping(value = "/customer/{customerId}",
            produces = {"application/json"},
            consumes = {"application/json"})
    public ResponseEntity<?> updateCustomer(@RequestBody Customer updateCustomer,
                                              @PathVariable Long customerId) {
        customerService.update(updateCustomer, customerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // POST one customer
    @PostMapping(value = "/customer",
            produces = {"application/json"},
            consumes = {"application/json"})
    public ResponseEntity<?> addNewCustomer(@Valid
                                              @RequestBody Customer newCustomer) throws URISyntaxException{
        newCustomer = customerService.save(newCustomer);

        // set location header for newly created resource
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newCustomerURI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{customerid}")
                .buildAndExpand(newCustomer.getCustomerid()).toUri();
        responseHeaders.setLocation(newCustomerURI);

        return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
    }
}
