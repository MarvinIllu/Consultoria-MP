package com.apirest.apirest.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.apirest.apirest.commons.GenericServiceImpl;
import com.apirest.apirest.dao.api.PersonaDaoAPI;
import com.apirest.apirest.model.Persona;
import com.apirest.apirest.service.api.PersonaServiceAPI;

@Service
public class PersonaServiceImpl extends GenericServiceImpl<Persona, Long> implements PersonaServiceAPI {
	
	@Autowired
	private PersonaDaoAPI personaDaoAPI;

	@Override
	public CrudRepository<Persona, Long> getDao() {
		// TODO Auto-generated method stub
		return personaDaoAPI;
	}
	
	
	
}
