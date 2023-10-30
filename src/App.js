import './App.css';
import React from 'react';
import {Prueba02} from './componentes/prueba02'



function App() {
  return (
    <div className="App">
      <Prueba02 
        nombre = 'Orlando'
        edad = {25}
        ciudad = 'Pisco'
      />
    </div>
  );
}

export default App;
