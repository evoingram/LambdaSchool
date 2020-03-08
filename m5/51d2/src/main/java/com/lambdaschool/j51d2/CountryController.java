package com.lambdaschool.j51d2;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import static com.lambdaschool.j51d2.J51d2Application.ourCountryList;


@RestController
@RequestMapping("/countries")
public class CountryController {
    // /names/all
    @GetMapping(value = "/names/all",
                produces = {"application/json"})
    public ResponseEntity<?> getAllCountries(){
        J51d2Application.ourCountryList.countryList.sort(
                (e1, e2) -> e1.getName().compareToIgnoreCase(e2.getName())
        );
        return new ResponseEntity<>(J51d2Application.ourCountryList, HttpStatus.OK);
    }

    // /names/start/{letter}
    @GetMapping(value="/names/start/{letter}",
               produces = {"application/json"})
    public ResponseEntity<?> getCountriesByFirstLettr(@PathVariable char letter) {
        ArrayList<Country> rtnCountries = ourCountryList.findCountries(
                c -> c.getName().toUpperCase().charAt(0) ==
                        Character.toUpperCase((letter))
        );
        return new ResponseEntity<>(rtnCountries, HttpStatus.OK);
    }

    // /names/size/{number}
    @GetMapping(value = "/names/size/{number}",
            produces = {"application/json"})

    public ResponseEntity<?> getCountriesByNameSize(@PathVariable long number) {
        return new ResponseEntity<>((J51d2Application.ourCountryList.findCountries(c ->(c.getName().length() >= number))), HttpStatus.OK);
    }



    // /population/size/{people}


    // /population/min


    // /population/max


    // /population/median



    // /age/age/{age}


    // /age/min


    // /age/max



    // /age/median

}
