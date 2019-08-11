import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';

//import Navigation  from "../src/components/Navigation"; //aqui no lleva {} en la importacion porque no
import DoForm from "./components/DoForm";

class App extends Component {

  constructor(){
      super();
      this.state = {
        todos //este es el importante!
      };
      this.addEstado = this.addEstado.bind(this);
      /* console.log( this.estado.todos.length) */
  };

    addEstado( todo ){
      this.setState({
        todos: [...this.state.todos, todo] //se le agrega al arreglo todos, lo que tenga el nuevo todo
      });
    }

    remove(ind){
     if(window.confirm("Deseas borrar esta tarea?")){ //cuando son eventos del navegador se le ponen window.
       this.setState({
         todos: this.state.todos.filter((e,i) =>{
           return i !== ind;
         })
       })
     }
    }

    render() {
      this.todo = this.state.todos.map((todo, i)=> { //es una funcion que recive dos parametros el todo y el indice i
        return (
          <div className="col-3" key={i}>
            <div className="card">
              <h4 className="card-title">
                { todo.title }
              </h4> 
              <p><mark> &nbsp; { todo.prioridad } &nbsp; </mark></p>
              

              <div className="card-body">
                <p> { todo.description } </p>

             
                <p><b> { todo.name } </b></p>	
              </div>
              <div className="card-footer">
                <button
                className="btn btn-danger"
                onClick={ this.remove.bind(this, i) }>
                Eliminar
                </button>
              </div>
            </div>
          </div>
        )
      });

      return (
        <div className="App">
           
           <nav className="navbar-expand-lg navbar-light bg-light">
            <div className="nav-wrapper">
                <a href="#" >
                  Tareas &nbsp; 
                  <span className="number"> {this.state.todos.length}&nbsp;</span>
                </a>
                
            </div>
            </nav>
            <br></br>
            

              <div className="container">
                
                <div className="row">
                <div className="col-3">
                  <img src={logo} className="App-logo" alt="logo" />
                  <DoForm addTask = { this.addEstado } ></DoForm>
                  <br></br>
                </div>
                  { this.todo }
                </div>
              
              </div>

        </div>
      );
    };
  
};

export default App;
