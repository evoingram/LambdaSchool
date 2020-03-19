package com.lambdaschool.j52c2.services;

public interface AgentService {
    List<Agent> findAll();

    Agent findAgentById(long id);

    Agent findAgentByName(String name);

    Agent findAgentByTelephone(String telephone);

    Agent delete(long id);

    Agent save(Agent agent);

    Agent update(Agent agent, long id);
}
