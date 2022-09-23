import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  let ciao="I'm React";
  let prova =`Hello Word, ${ciao}`

  return (
    <div className="App">
      <header className="App-header">
        {prova}
      </header>
    </div>
  );
}

export default App;
