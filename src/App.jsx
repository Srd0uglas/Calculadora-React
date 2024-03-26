import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Botao from './components/Botao';
import * as math from "mathjs";

function App() {
  const operacoes = ['*', '/', '+', '.', '-'];
  const [input, setInput] = useState("");

  function insereNum(val) {
    setInput(input + val);
  }

  function apagarUm(){
    var apagar = input;
    setInput(apagar.slice(0, -1));
  }

  function insereOperacao(val) {
    if (input === "" || operacoes.includes(input[input.length - 1]) && operacoes.includes(val)) {
      return;
    }
    else {
      setInput(input + val);
    }
  }

  function calcular() {
    if (input === "" || operacoes.includes(input[input.length - 1])) {
      return input;
    }
    else {
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>
        Calculadora React
      </h1>
      <div className="calc-wrapper">
        <Botao isInput>
          {input}
        </Botao>
        <div className="linha" id='primeiro'>
          <Botao onClick={() => setInput("")} id="Teste">
            C
          </Botao>
          <Botao onClick={apagarUm}>
            Backspace
          </Botao>
          <Botao onClick={insereOperacao}>
            /
          </Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>
            7
          </Botao>
          <Botao onClick={insereNum}>
            8
          </Botao>
          <Botao onClick={insereNum}>
            9
          </Botao>
          <Botao onClick={insereOperacao}>
            *
          </Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>
            4
          </Botao>
          <Botao onClick={insereNum}>
            5
          </Botao>
          <Botao onClick={insereNum}>
            6
          </Botao>
          <Botao onClick={insereOperacao}>
            +
          </Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>
            1
          </Botao>
          <Botao onClick={insereNum}>
            2
          </Botao>
          <Botao onClick={insereNum}>
            3
          </Botao>
          <Botao onClick={insereOperacao}>
            -
          </Botao>
        </div>
        <div className="linha" id="ultimo">
          <Botao onClick={insereNum}>
            0
          </Botao>
          <Botao onClick={insereOperacao}>
            .
          </Botao>
          <Botao onClick={calcular}>
            =
          </Botao>
        </div>
      </div>
    </div>
  )
}

export default App
