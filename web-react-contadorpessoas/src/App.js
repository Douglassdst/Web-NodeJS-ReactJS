import React, { Component } from 'react';
import './App.css';
  
var a = 0;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: a
    };
 
    this.soma = this.soma.bind(this);
    this.sub = this.sub.bind(this);
  }
  
  soma(){    
    this.setState({
      numero : adicionar(a)
      
    });
  }

  sub(){    
    this.setState({
      numero : subtrair(a)
      
    });
  }
 
  render(){
    return(
      <div className="fundo">
        <center>
          <h1 className="saida">{this.state.numero }</h1> 
          <button className="botao" onClick={this.soma}>ADICIONAR</button>
          <button className="botao" onClick={this.sub}>REMOVER</button>                   
        </center>
        
      </div>
    );
  }
}
 
export default App;
 
function adicionar(num){  
  return a = num + 1;
}


function subtrair(num){  
  return a = num - 1;
}