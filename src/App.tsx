import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import showNotification from './serviceWorker';

navigator.serviceWorker.register('service-worker.js')

const App: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      showNotification("Nova mensagem recebida", {
        body: "Você tem uma nova mensagem de exemplo.",
      });
    }, 60000); // Intervalo de 1 minuto em milissegundos

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
