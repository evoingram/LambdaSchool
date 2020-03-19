package com.lambdaschool.j52c2.services;

import com.lambdaschool.j52c2.models.Order;

import java.util.List;

public interface OrderService {
    List<Order> findAll();

    Order findOrderById(long id);

    Order findOrderByName(String name);

    Order findOrderByTelephone(String telephone);

    Order delete(long id);

    Order save(Order order);

    Order update(Order order, long id);
}
