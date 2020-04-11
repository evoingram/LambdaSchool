package com.lambdaschool.authenticatedusers.repository;

import com.lambdaschool.authenticatedusers.model.Quote;
import org.springframework.data.repository.CrudRepository;

public interface QuoteRepository extends CrudRepository<Quote, Long>
{
}
