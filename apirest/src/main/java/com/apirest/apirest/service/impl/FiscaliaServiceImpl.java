package com.apirest.apirest.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.apirest.apirest.commons.GenericServiceImpl;
import com.apirest.apirest.dao.api.FiscaliaDaoAPI;
import com.apirest.apirest.model.Fiscalia;
import com.apirest.apirest.service.api.FiscaliaServiceAPI;

@Service
public class FiscaliaServiceImpl extends GenericServiceImpl<Fiscalia, Long> implements FiscaliaServiceAPI {
	
	@Autowired
	private FiscaliaDaoAPI fiscaliaDaoAPI;
	
	@Override
	public CrudRepository<Fiscalia, Long>getDao(){
		return fiscaliaDaoAPI;
	}

}
