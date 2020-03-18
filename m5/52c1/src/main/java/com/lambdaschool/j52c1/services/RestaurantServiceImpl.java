package com.lambdaschool.j52c1.services;

import com.lambdaschool.j52c1.models.Restaurant;
import com.lambdaschool.j52c1.repos.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value="restaurantService")
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantRepository restrepos;

    @Override
    public List<Restaurant> findAll() {
        List<Restaurant> rtnList = new ArrayList<>();
        restrepos.findAll().iterator().forEachRemaining(rtnList::add);
        return rtnList;
    }

    @Override
    public Restaurant findRestaurantById(long id) {
        return null;
    }

    @Override
    public Restaurant findRestaurantByName(String name) {
        return null;
    }

    @Override
    public void delete(long id) {

    }

    @Override
    public Restaurant save(Restaurant restaurant) {
        return null;
    }

    @Override
    public Restaurant update(Restaurant restaurant, long id) {
        return null;
    }
}
