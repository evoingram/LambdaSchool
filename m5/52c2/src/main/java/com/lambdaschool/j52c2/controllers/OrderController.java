package com.lambdaschool.j52c2.controllers;

public class OrderController {

    @Autowired
    private OrderService orderService;

    // GET all orders
    // http://localhost:2019/orders/orders
    @GetMapping(value = "/orders/orders",
            produces = {"application/json"})
    public ResponseEntity<?> listAllOrders(){

        List<Order> myOrders = orderService.findAll();
        return new ResponseEntity<>(myOrders, HttpStatus.OK);
    }

    // GET one order by id
    // http://localhost:2019/orders/order/{orderid}
    @GetMapping(value = "/order/{orderId}",
            produces = {"application/json"})
    public ResponseEntity<?> getOrderById(@PathVariable Long orderId) {
        Order r = orderService.findOrderById(orderId);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // GET one order by name
    // http://localhost:2019/orders/order/{orderName}
    @GetMapping(value = "/order/name/{orderName}",
            produces = {"application/json"})
    public ResponseEntity<?> getOrderByName(@PathVariable String orderName) {
        Order r = orderService.findOrderByName(orderName);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // GET one order by telephone
    // http://localhost:2019/orders/order/{orderPhone}
    @GetMapping(value = "/order/phone/{orderPhone}",
            produces = {"application/json"})
    public ResponseEntity<?> getOrderByTelephone(@PathVariable String orderPhone) {
        Order r = orderService.findOrderByTelephone(orderPhone);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }
    // DELETE one order
    // http://localhost:2019/orders/order/{orderid}
    @DeleteMapping(value = "/order/{orderId}")
    public ResponseEntity<?> deleteOrderById(@PathVariable Long orderId) {
        orderService.delete(orderId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // PUT one order
    // http://localhost:2019/orders/order/{orderid}
    @PutMapping(value = "/order/{orderId}",
            produces = {"application/json"},
            consumes = {"application/json"})
    public ResponseEntity<?> updateOrder(@RequestBody Order updateOrder,
                                              @PathVariable Long orderId) {
        orderService.update(updateOrder, orderId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // POST one order
    @PostMapping(value = "/order",
            produces = {"application/json"},
            consumes = {"application/json"})
    public ResponseEntity<?> addNewOrder(@Valid
                                              @RequestBody Order newOrder) throws URISyntaxException{
        newOrder = orderService.save(newOrder);

        // set location header for newly created resource
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newOrderURI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{orderid}")
                .buildAndExpand(newOrder.getOrderid()).toUri();
        responseHeaders.setLocation(newOrderURI);

        return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
    }
}
