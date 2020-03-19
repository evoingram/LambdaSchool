package com.lambdaschool.j52c2.repos;

import com.lambdaschool.j52c2.models.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {

}