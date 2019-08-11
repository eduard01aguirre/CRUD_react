import React, {Component} from "react";

class DoForm extends Component {
    constructor(){

        super();
            this.state = {
                title: '',
                name: '',
                description: '',
                prioridad: 'low'
            };
            this.handle = this.handle.bind(this); //cada que se llame al metodo se le dira que es de este componente
            this.enviar = this.enviar.bind(this); //igual que el de arriba...
    }

    enviar(e){
        e.preventDefault(); //evita el refrescado de la pantalla
        this.props.addTask(this.state); //los props es la forma en la que se pasa data en las etiquetas
    }

    handle(e){
        const {value, name} = e.target
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={ this.enviar }>
                    <div className="form-group">

                        <label htmlFor="priori">Prioridad:</label>
                        <select 
                        className="form-control" 
                        id="priori" 
                        onBlur = {this.handle}
                        name="prioridad">
                            <option value="low">Baja</option>
                            <option value="medium">Medio</option>
                            <option value="high">Alta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                        onChange = {this.handle}
                        type="text"
                        name="title"
                        className="form-control"
                        id="auto-input"
                        placeholder="Titulo">
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                        onChange = {this.handle}
                        type="text"
                        name="name"
                        className="form-control"
                        id="auto-input"
                        placeholder="Nombre">
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                        onChange = {this.handle}
                        type="text"
                        name="description"
                        className="form-control"
                        id="auto-input"
                        placeholder="Descripcion">
                        </input>
                    </div>
                    
                        <br></br>
                        <button className="btn btn-info" type="submit">Crear</button>
                   
                </form>
            </div>
        )
    }
}

export default DoForm;