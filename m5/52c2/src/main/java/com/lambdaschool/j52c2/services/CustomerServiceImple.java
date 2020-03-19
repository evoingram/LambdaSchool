package com.lambdaschool.j52c2.services;

import com.lambdaschool.j52c2.models.Agent;
import com.lambdaschool.j52c2.models.Customer;
import com.lambdaschool.j52c2.models.Order;
import com.lambdaschool.j52c2.repos.OrderRepository;
import com.lambdaschool.j52c2.repos.AgentsRepository;
import com.lambdaschool.j52c2.repos.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

// CUSTOMERS (custcode, custname, custcity, workingarea, custcountry, grade, openingamt, receiveamt, paymentamt, outstandingamt, phone, agentcode)
@Transactional
@Service(value="customerService")
public interface CustomerServiceImple {
    @Autowired
    private CustomerRepository restrepos;

    @Override
    public List<Customer> findAll() {
        List<Customer> rtnList = new ArrayList<>();
        restrepos.findAll().iterator().forEachRemaining(rtnList::add);
        return rtnList;
    }

    @Override
    public Customer findCustomerById(long id) {

        return restrepos.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("ID = " + id));
    }

    @Override
    public Customer findCustomerByName(String name) {
        Customer customer = restrepos.findByName(name);

        if(customer == null){
            throw new EntityNotFoundException("Customer not found, name = " + name);
        }
        return customer;
    }

    @Override
    public Customer findCustomerByTelephone(String telephone) {
        Customer customer = restrepos.findByTelephone(telephone);

        if(customer == null){
            throw new EntityNotFoundException("Customer not found, telephone = " + telephone);
        }
        return customer;
    }

    @Override
    public Customer delete(long id) {
        if(restrepos.findById(id).isPresent()){
            restrepos.deleteById(id);
        }
        else {
            throw new EntityNotFoundException("ID = " + id);
        }
        return null;
    }

    @Transactional
    @Override
    public Customer save(Customer customer) {
        Customer newCustomer = new Customer();
        newCustomer.setName(customer.getName());
        newCustomer.setAddress(customer.getAddress());
        newCustomer.setCity(customer.getCity());
        newCustomer.setState(customer.getState());
        newCustomer.setTelephone(customer.getTelephone());

        // pointers
        // pointer gets set, all data goes away, doesn't bring info with it
        // newCustomer.setMenus(customer.getMenus());

        for(Menu m : customer.getMenus()){
            newCustomer.getMenus().add(new Menu(m.getDish(), m.getPrice(), newCustomer));
        }
        return restrepos.save(newCustomer);
    }

    @Transactional
    @Override
    public Customer update(Customer customer, long id) {

        Customer currentCustomer =
                restrepos.findById(id)
                        .orElseThrow(()->new EntityNotFoundException(Long.toString(id)));

        if(customer.getName() != null){
            currentCustomer.setName((customer.getName()));
        }
        if(customer.getAddress() != null){
            currentCustomer.setAddress((customer.getAddress()));
        }
        if(customer.getCity() != null){
            currentCustomer.setCity((customer.getCity()));
        }
        if(customer.getState() != null){
            currentCustomer.setState((customer.getState()));
        }
        if(customer.getTelephone() != null){
            currentCustomer.setTelephone((customer.getTelephone()));
        }
        if(customer.getMenus().size() > 0){
            for(Menu m : customer.getMenus()){
                currentCustomer.getMenus().add(new Menu(m.getDish(), m.getPrice(), currentCustomer));
            }

        }
        return restrepos.save(currentCustomer);
    }
}
