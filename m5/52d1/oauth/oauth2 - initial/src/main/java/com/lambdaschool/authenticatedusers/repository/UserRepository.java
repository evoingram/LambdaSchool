package com.lambdaschool.authenticatedusers.repository;

import com.lambdaschool.authenticatedusers.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>
{
    User findByUsername(String username);
}
