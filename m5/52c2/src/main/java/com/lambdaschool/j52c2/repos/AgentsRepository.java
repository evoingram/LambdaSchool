package com.lambdaschool.j52c2.repos;

import com.lambdaschool.j52c2.models.Agent;
import org.springframework.data.repository.CrudRepository;

public interface AgentsRepository extends CrudRepository<Agent, Long> {
}