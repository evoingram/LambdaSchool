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

@Transactional
@Service(value="orderService")
public class OrderServiceImple {
    @Autowired
    private OrderRepository restrepos;

    @Override
    public List<Order> findAll() {
        List<Order> rtnList = new ArrayList<>();
        restrepos.findAll().iterator().forEachRemaining(rtnList::add);
        return rtnList;
    }

    @Override
    public Order findOrderById(long id) {

        return restrepos.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("ID = " + id));
    }

    @Override
    public Order findOrderByName(String name) {
        Order order = restrepos.findByName(name);

        if(order == null){
            throw new EntityNotFoundException("Order not found, name = " + name);
        }
        return order;
    }

    @Override
    public Order findOrderByTelephone(String telephone) {
        Order order = restrepos.findByTelephone(telephone);

        if(order == null){
            throw new EntityNotFoundException("Order not found, telephone = " + telephone);
        }
        return order;
    }

    @Override
    public Order delete(long id) {
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
    public Order save(Order order) {
        Order newOrder = new Order();
        newOrder.setName(order.getName());
        newOrder.setAddress(order.getAddress());
        newOrder.setCity(order.getCity());
        newOrder.setState(order.getState());
        newOrder.setTelephone(order.getTelephone());

        // pointers
        // pointer gets set, all data goes away, doesn't bring info with it
        // newOrder.setMenus(order.getMenus());

        for(Menu m : order.getMenus()){
            newOrder.getMenus().add(new Menu(m.getDish(), m.getPrice(), newOrder));
        }
        return restrepos.save(newOrder);
    }

    @Transactional
    @Override
    public Order update(Order order, long id) {

        Order currentOrder =
                restrepos.findById(id)
                        .orElseThrow(()->new EntityNotFoundException(Long.toString(id)));

        if(order.getName() != null){
            currentOrder.setName((order.getName()));
        }
        if(order.getAddress() != null){
            currentOrder.setAddress((order.getAddress()));
        }
        if(order.getCity() != null){
            currentOrder.setCity((order.getCity()));
        }
        if(order.getState() != null){
            currentOrder.setState((order.getState()));
        }
        if(order.getTelephone() != null){
            currentOrder.setTelephone((order.getTelephone()));
        }
        if(order.getMenus().size() > 0){
            for(Menu m : order.getMenus()){
                currentOrder.getMenus().add(new Menu(m.getDish(), m.getPrice(), currentOrder));
            }

        }
        return restrepos.save(currentOrder);
    }

}
