import React, { Component } from 'react'
import FiscaliaService from '../services/FiscaliaServive';

class ListFiscaliaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                fiscalias: []
        }
        this.addFiscalia = this.addFiscalia.bind(this);
        this.editFiscalia = this.editFiscalia.bind(this);
        this.deleteFiscalia = this.deleteFiscalia.bind(this);
    }

    deleteFiscalia(id){
        FiscaliaService.delete(id).then(res => {
            this.setState({fiscalias: this.state.fiscalias.filter(fiscalia => fiscalia.id !== id)});            
        });
    }    
    editFiscalia(id){
        this.props.history.push(`/add-fiscalia/${id}`);
    }

    componentDidMount(){
        FiscaliaService.getAll().then((res) => {
            this.setState({fiscalias: res.data});
        });
    }

    addFiscalia(){
        this.props.history.push('/add-fiscalia/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Listado de Fiscalias</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFiscalia}>Agregar Fiscalia</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Ubicación</th>
                                    <th>Teléfono</th>
                                    <th>Latitud</th>
                                    <th>Longitud</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.fiscalias.map(
                                        fiscalia => 
                                        <tr key = { fiscalia.id} >
                                            <td>{fiscalia.id}</td>
                                            <td>{fiscalia.nombre}</td>
                                            <td>{fiscalia.ubicacion}</td>
                                            <td>{fiscalia.telefono}</td>
                                            <td>{fiscalia.latitud}</td>
                                            <td>{fiscalia.longitud}</td>
                                             <td>
                                                 <button onClick={ () => this.editFiscalia(fiscalia.id)} className="btn btn-info">Actualizar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFiscalia(fiscalia.id)} className="btn btn-danger">Eliminar </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListFiscaliaComponent
