/**
 * 
 */
package com.apirest.apirest.model;

/**
 * @author MarvinIllu
 *
 */
import javax.persistence.*;

@Entity
public class Fiscalia {
	@Id
	@GeneratedValue
	(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "ubicacion")
	private String ubicacion;
	
	@Column(name = "telefono")
	private String telefono;
	
	@Column(name = "latitud")
	private Float latitud;
	
	@Column(name = "longitud")
	private Float longitud;
	
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * @return the ubicacion
	 */
	public String getUbicacion() {
		return ubicacion;
	}

	/**
	 * @param ubicacion the ubicacion to set
	 */
	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	/**
	 * @return the telefono
	 */
	public String getTelefono() {
		return telefono;
	}

	/**
	 * @param telefono the telefono to set
	 */
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	/**
	 * @return the latitud
	 */
	public Float getLatitud() {
		return latitud;
	}

	/**
	 * @param latitud the latitud to set
	 */
	public void setLatitud(Float latitud) {
		this.latitud = latitud;
	}

	/**
	 * @return the longitud
	 */
	public Float getLongitud() {
		return longitud;
	}

	/**
	 * @param longitud the longitud to set
	 */
	public void setLongitud(Float longitud) {
		this.longitud = longitud;
	}
}
