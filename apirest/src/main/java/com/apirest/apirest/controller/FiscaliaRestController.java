package com.apirest.apirest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.apirest.apirest.model.Fiscalia;
import com.apirest.apirest.model.Persona;
import com.apirest.apirest.service.api.FiscaliaServiceAPI;
import com.apirest.apirest.service.api.PersonaServiceAPI;

@RestController
@RequestMapping(value = "/api/fiscalia/")
@CrossOrigin("*")
public class FiscaliaRestController {
	@Autowired
	private FiscaliaServiceAPI fiscaliaServiceAPI;
	
	//GET
	@GetMapping(value = "/all")
	public List<Fiscalia> getAll(){		
		return fiscaliaServiceAPI.getAll();
	}
	
	@GetMapping(value = "/find/{id}")
	public Fiscalia find(@PathVariable Long id) {
		return fiscaliaServiceAPI.get(id);
	}
	
	//POST
	@PostMapping(value = "/save")
	public ResponseEntity<Fiscalia> save(@RequestBody Fiscalia fiscalia) {
		Fiscalia obj = fiscaliaServiceAPI.save(fiscalia);
		return new ResponseEntity<Fiscalia>(obj, HttpStatus.OK);
	}
	
	@GetMapping(value = "delete/{id}")
	public ResponseEntity<Fiscalia> delete(@PathVariable Long id) {
		Fiscalia fiscalia = fiscaliaServiceAPI.get(id);
		if(fiscalia != null) {
			fiscaliaServiceAPI.delete(id);
		}else {
			return new ResponseEntity<Fiscalia>(fiscalia, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Fiscalia>(fiscalia, HttpStatus.OK);
	}
	
	@PutMapping("update")
	public void update(@RequestBody Fiscalia fiscalia) {
		fiscaliaServiceAPI.save(fiscalia);
	}
	

}
