import React, { Component } from 'react'
import FiscaliaService from '../services/FiscaliaServive';

class CreateFiscaliaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nombre: '',
            ubicacion: '',
            telefono: '',
            latitud:'',
            longitud:''
        }
        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changeUbicacionHandler = this.changeUbicacionHandler.bind(this);
        this.changeTelefonoHandler = this.changeTelefonoHandler.bind(this);
        this.changeLatitudHandler = this.changeLatitudHandler.bind(this);
        this.changeLongitudHandler = this.changeLongitudHandler.bind(this);
        this.saveOrUpdateFiscalia = this.saveOrUpdateFiscalia.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{

            FiscaliaService.find(this.state.id).then((res) =>{
                console.log(res.data);
                let fiscalia = res.data;
                this.setState({nombre: fiscalia.nombre, 
                               ubicacion: fiscalia.ubicacion, 
                               telefono: fiscalia.telefono,
                               latitud: fiscalia.latitud, 
                               longitud:fiscalia.latitud});   
            });
        }        
    }
    saveOrUpdateFiscalia = (e) => {
        e.preventDefault();

        let fiscalia;
        console.log('fiscalia => ' + JSON.stringify(fiscalia));

        if(this.state.id === '_add'){
            fiscalia = {nombre: this.state.nombre, ubicacion: this.state.ubicacion, telefono: this.state.telefono,latitud: this.state.latitud, longitud:this.state.latitud};
        console.log('fiscalia => ' + JSON.stringify(fiscalia));
            FiscaliaService.save(fiscalia).then(response =>{            
                this.props.history.push('/list-fiscalias');
            });
        }else{
            fiscalia = {id: this.state.id, nombre: this.state.nombre, ubicacion: this.state.ubicacion, telefono: this.state.telefono,latitud: this.state.latitud, longitud:this.state.latitud};
            console.log('fiscalia => ' + JSON.stringify(fiscalia));
            FiscaliaService.update(fiscalia).then(response =>{
                this.props.history.push('/list-fiscalias');
            });
        }
    }
    
    changeNombreHandler=(event) =>{
        this.setState({nombre: event.target.value});
    }

    changeUbicacionHandler=(event) =>{
        this.setState({ubicacion: event.target.value});
    }

    changeTelefonoHandler=(event) =>{
        this.setState({telefono: event.target.value});
    }

    changeLatitudHandler=(event) =>{
        this.setState({latitud: event.target.value});
    }

    changeLongitudHandler=(event) =>{
        this.setState({longitud: event.target.value});
    }


    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Agregar Fiscalia</h3>
        }else{
            return <h3 className="text-center">Actualizar Fiscalia</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                <form action="">
                                <div className='from-group'>
                                    <label>Nombre:</label>
                                    <input type="text" name="nombre" className='form-control'
                                     value={ this.state.nombre} onChange={this.changeNombreHandler} />
                                </div>
                                <div className='from-group'>
                                    <label>Ubicación:</label>
                                    <input type="text" name="ubicacion" className='form-control'
                                     value={ this.state.ubicacion} onChange={this.changeUbicacionHandler} />
                                </div>
                                <div className='from-group'>
                                    <label>Teléfono:</label>
                                    <input type="text" name="telefono" className='form-control'
                                     value={ this.state.telefono} onChange={this.changeTelefonoHandler} />
                                </div>
                                <div className='from-group'>
                                    <label>Latitud:</label>
                                    <input type="text" name="latitud" className='form-control'
                                     value={ this.state.latitud} onChange={this.changeLatitudHandler} />
                                </div>
                                <div className='from-group'>
                                    <label>Longitud:</label>
                                    <input type="text" name="longitud" className='form-control'
                                     value={ this.state.longitud} onChange={this.changeLongitudHandler} />
                                </div>
                                <button className='btn btn-success' onClick={this.saveOrUpdateFiscalia}>Guardar</button>
                                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                            </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateFiscaliaComponent
