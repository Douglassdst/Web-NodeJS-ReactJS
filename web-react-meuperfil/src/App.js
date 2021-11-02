import './App.css';

function App() {
  return (
    <form className="App">
      <div className="App-header">        
        <img src="foto.jpg" className="imagem" alt="foto"></img>
      </div>
      <div className="conteudo">
        
        <h1>Dados Pessoais:</h1>
        <h3><b>Nome:</b> Douglas Sousa dos Santos<br></br> 
        <b>Data de Nascimento:</b> 26/03/1995<br></br>
        <b>Email:</b> douglas.sdst@gmail.com<br></br> 
        <b>Telefone:</b> 13 981382501<br></br> 
        <b>Endereço:</b> Rua Paulo Lucanea 286, Nova Mirim Praia Grande - SP</h3>
        
        <h1>Formação:</h1>
        <h3>Ensino Medio Completo<br></br> 
        Cursando 4° semestre, Ciencia da Computação Universidade Unip </h3>
               
        
        <h1>Experiência</h1>
        <h3>
        <b>Empresa:</b> Prefeitura de Praia Grande<br></br> 
        <b> Período:</b> 2 anos<br></br> 
        <b> Cargo:</b> Menos Aprendiz
        </h3>
        <h3>          
        <b> Empresa:</b> Prefeitura de Praia Grande<br></br> 
        <b> Período:</b> 3 anos, até o momento<br></br> 
        <b> Cargo:</b> Auxiliar 
        </h3>
        
        <h1>Projetos:</h1>
        <a href="https://github.com/Douglassdst/Web-NodeJS-ReactJS" className="link" target="Nova Aba">Link do repositorio GIT</a>

      </div>
    </form>
  );
}

export default App;
