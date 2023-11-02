import logo from './logo.svg';
import './App.css';
import React from 'react';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Exemplo de Props em React</h1>
      <ParentComponent />
      <h2>Chamada direta do Componente Filho</h2>
      <ChildComponent propRecebida="Prop passada diretamente" />
    </div>
  );
}

export default App;
