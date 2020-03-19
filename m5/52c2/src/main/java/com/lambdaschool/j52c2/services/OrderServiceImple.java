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

// ORDERS (ordnum, ordamount, advanceamount, custcode, orderdescription)
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

    // GET /orders/order/{ordnum} - Returns the order and its customer with the given order number
    @Override
    public Order findOrderById(long ordnum) {

        return restrepos.findById(ordnum)
                .orElseThrow(()-> new EntityNotFoundException("ID = " + ordnum));
    }


    @Override
    public Order findOrderByAdvanceAmount(double advanceamount) {
        Order order = restrepos.findOrderByAdvanceAmount(advanceamount);

        if(order == null){
            throw new EntityNotFoundException("Order not found, advanceamount = " + advanceamount);
        }
        return order;
    }

    public Order findOrderByOrderAmount(double ordamount) {
        Order order = restrepos.findOrderByOrderAmount(ordamount);

        if(order == null){
            throw new EntityNotFoundException("Order not found, ordamount = " + ordamount);
        }
        return order;
    }


    @Override
    public Order delete(long ordnum) {
        if(restrepos.findById(ordnum).isPresent()){
            restrepos.deleteById(ordnum);
        }
        else {
            throw new EntityNotFoundException("ID = " + ordnum);
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
    public Order update(Order order, long ordnum) {
    // ordamount, advanceamount, custcode, orderdescription
        Order currentOrder =
                restrepos.findById(ordnum)
                        .orElseThrow(()->new EntityNotFoundException(Long.toString(ordnum)));

        if(order.getOrdamount() != null){
            currentOrder.setOrdamount((order.getOrdamount()));
        }
        if(order.getAdvanceamount() != null){
            currentOrder.setAdvanceamount((order.getAdvanceamount()));
        }
        if(order.getCustcode() != null){
            currentOrder.setCustcode((order.getCustcode()));
        }
        if(order.getOrderDescription() != null){
            currentOrder.setOrderDescription((order.getOrderDescription()));
        }
        // come back and add customer fields
        if(order.getCustomer().size() > 0){
            for(Menu m : order.getCustomer()){
                currentOrder.getCustomer().add(new Csutomer(m.getDish(), m.getPrice(), currentOrder));
            }

        }
        return restrepos.save(currentOrder);
    }

}