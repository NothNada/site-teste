import Cima from './componentes/cima/Cima';
import Baixo1 from './componentes/baixo1/Baixo1';
import Baixo2 from './componentes/baixo2/Baixo2';
import Trecos from './componentes/trecos/Trecos';

import './App.css';

function App() {
  const movel = window.innerWidth < 900;

  return (
    <>
      <Cima movel={movel} />
      <Baixo1 movel={movel}>
        <h1 id="sobre">Seja Bem-Vindo</h1>
        <p>
          À clinica Podologia & Saúde irá cuidar dos seus pés com muito cuidado e sem dores
        </p>
      </Baixo1>

      <Trecos movel={movel} />

      <Baixo2 movel={movel}>
        <h1 id="cont">Contatos</h1>
        <img src="imgs/zapzap.png" alt="zapzap icon" />
        <p>+55 (11) 98405-5827</p>
        <img src="imgs/tel.png" alt="telefone icon" />
        <p>+55 (11) 98405-5827</p>
      </Baixo2>
    </>
  );
}

export default App;