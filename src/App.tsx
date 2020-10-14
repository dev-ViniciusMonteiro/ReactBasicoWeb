import React from 'react';
//componenete 'e uma funcao que retorna conteudo html
import './styles/global.css'

interface padrao{
  text: string
}


function OlaMundo(arg: padrao){
  return <h1>{arg.text}</h1>
}

function App() {
  return (
    <div className="App">
        <OlaMundo text="foi 1"/>
        <OlaMundo text="foi 2"/>
        <OlaMundo text="Uhull"/>
        <h1>TEste </h1>
    </div>
  );
}

export default App;
