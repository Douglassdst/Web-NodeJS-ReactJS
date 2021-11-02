import React, { Component } from 'react';
import './App.css';

function multiplicar(){
  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);

  document.getElementById('n1').value = "";
  document.getElementById('n2').value = "";
  return "Resultado: "  + (n1*n2)
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: "Resultado: "
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
      this.setState({
      nome: multiplicar()
    });
  }
 
  render(){
    return(
      <div className="back">
        
        <div className="App"> 
        
          <form action="" className="formulario">
            <div className="titulo"> 
              <h1 className="h1Titulo">CALCULADORA</h1>
            </div>
            <input className="entrada" type="text" id="n1" placeholder="Digite um valor..."></input>
            <input className="entrada" type="text" id="n2" placeholder="Digite um valor..."></input>   
          </form>

          <div>
            <h1>{this.state.nome}</h1>
            <button className="botao" onClick={this.entrar}>CALCULAR</button> 
          </div>             

        </div>
      </div>
    );
  }
}

 
export default App;

