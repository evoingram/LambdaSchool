package com.lambdaschool.authenticatedusers;

// Vivek Vishwanath

import com.lambdaschool.authenticatedusers.model.Quote;
import com.lambdaschool.authenticatedusers.model.Role;
import com.lambdaschool.authenticatedusers.model.User;
import com.lambdaschool.authenticatedusers.model.UserRoles;
import com.lambdaschool.authenticatedusers.repository.QuoteRepository;
import com.lambdaschool.authenticatedusers.repository.RoleRepository;
import com.lambdaschool.authenticatedusers.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Transactional
@Component
public class SeedData implements CommandLineRunner
{

    RoleRepository rolerepos;
    UserRepository userrepos;
    QuoteRepository todorepos;

    public SeedData(RoleRepository rolerepos, UserRepository userrepos, QuoteRepository todorepos) {
        this.rolerepos = rolerepos;
        this.userrepos = userrepos;
        this.todorepos = todorepos;
    }

    @Override
    public void run(String[] args) throws Exception {
        Role r1 = new Role("admin");
        Role r2 = new Role("user");

        rolerepos.save(r1);
        rolerepos.save(r2);

        ArrayList<UserRoles> users = new ArrayList<>();
        users.add(new UserRoles(new User(), r2));
        User u1 = new User("barnbarn", "ILuvM4th!", users);
        u1.getQuotes().add(new Quote("Live long and prosper", u1));
        u1.getQuotes().add(new Quote("The enemy of my enemy is the enemy I kill last", u1));
        u1.getQuotes().add(new Quote("Beam me up", u1));
        userrepos.save(u1);

        ArrayList<UserRoles> admins = new ArrayList<>();
        admins.add(new UserRoles(new User(), r1));
        admins.add(new UserRoles(new User(), r2));
        User u2 = new User("admin", "password", admins);
        u2.getQuotes().add(new Quote("A creative man is motivated by the desire to achieve, not by the desire to beat others", u2));
        u2.getQuotes().add(new Quote("The question isn't who is going to let me; it's who is going to stop me.", u2));
        userrepos.save(u2);

        users = new ArrayList<>();
        users.add(new UserRoles(new User(), r2));
        User u3 = new User("Bob", "password", users);
        userrepos.save(u3);

        users = new ArrayList<>();
        users.add(new UserRoles(new User(), r2));
        User u4 = new User("Jane", "password", users);
        userrepos.save(u4);
    }
}