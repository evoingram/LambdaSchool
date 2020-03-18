package com.lambdaschool.j52c1.controllers;

import com.lambdaschool.j52c1.models.Restaurant;
import com.lambdaschool.j52c1.services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    // GET all restaurants
    // http://localhost:2019/restaurants/restaurants
    @GetMapping(value = "/restaurants/restaurants",
                produces = {"application/json"})
    public ResponseEntity<?> listAllRestaurants(){

        List<Restaurant> myRestaurants = restaurantService.findAll();
        return new ResponseEntity<>(myRestaurants, HttpStatus.OK);
    }

    // GET one restaurant
    // http://localhost:2019/restaurants/restaurant/{restaurantid}
    @GetMapping(value = "/restaurants/restaurants/{restaurantId}",
            produces = {"application/json"})
    public ResponseEntity<?> getRestaurantById(@PathVariable Long restaurantId) {
        Restaurant r = restaurantService.findRestaurantById(restaurantId);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }


    // DELETE one restaurant
    // http://localhost:2019/restaurants/restaurant/{restaurantid}
    @DeleteMapping(value = "/restaurants/restaurants/{restaurantId}",
            produces = {"application/json"})
    public ResponseEntity<?> getRestaurantById(@PathVariable Long restaurantId) {
        Restaurant r = restaurantService.findRestaurantById(restaurantId);
        return new ResponseEntity<>(r, HttpStatus.OK);

}
