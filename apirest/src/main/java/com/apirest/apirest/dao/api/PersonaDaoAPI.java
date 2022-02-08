/**
 * 
 */
package com.apirest.apirest.dao.api;

import org.springframework.data.repository.CrudRepository;

import com.apirest.apirest.model.Persona;

/**
 * @author marvi
 *
 */


public interface PersonaDaoAPI extends CrudRepository<Persona, Long> {

}
