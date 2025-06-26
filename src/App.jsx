import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
///Função Inicial de Sorteio de Ideias =D
function App(){
  const ideias = [
    "Quiz interativo sobre HTML/CSS",
    "Sistema de Gerenciamento de Estoque",
    "Gerador de senhas Fortes",
    "Agenda Empresarial Integrada com Banco de Dados",
    "Site Jornalístico sobre Games",
    "App Web para Cuidar de Plantas",
    "Plataforma de Receitas Personalizadas",
    "Gerenciador de Tarefas com Gamificação",
    "Quiz Multiplayer em Tempo Real",
    "Conversor de Moedas com API",
    "Jogo da Forca Online",
  ];
///A fazer aqui em baixo: Função de Sorteio!
}

export default App
