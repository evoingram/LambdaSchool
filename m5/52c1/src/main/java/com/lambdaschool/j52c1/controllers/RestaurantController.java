package com.lambdaschool.j52c1.controllers;

import com.lambdaschool.j52c1.models.Restaurant;
import com.lambdaschool.j52c1.services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    // http://localhost:2019/restaurants/restaurants
    @GetMapping(value = "/restaurants/restaurants",
                produces = {"application/json"})
    public ResponseEntity<?> listAllRestaurants(){

        List<Restaurant> myRestaurants = restaurantService.findAll();
        return new ResponseEntity<>(myRestaurants, HttpStatus.OK);
    }
}
