import Cima from './componentes/cima/Cima';
import Baixo1 from './componentes/baixo1/Baixo1';
import Localizacao from './componentes/localizacao/Localizacao';
import Baixo2 from './componentes/baixo2/Baixo2';
import Rodape from './componentes/rodape/Rodape';
import Trecos from './componentes/trecos/Trecos';

import './App.css';

function App() {
  return (
    <>
      <Cima />
      <Baixo1 id="sobre" titulo="Seja Bem-Vindo">
        <p>
          A Podologia &amp; Saúde Mooca é especializada em tratamentos podológicos para todas as
          idades — do público infantil à terceira idade. Atendimento cuidadoso, sem dor e com
          agendamento prévio.
        </p>
        <a className="cta" href="https://wa.me/5511984055827" target="_blank" rel="noreferrer">
          Agendar pelo WhatsApp
        </a>
      </Baixo1>

      <Trecos />

      <Localizacao />

      <Baixo2 id="cont" />

      <Rodape />
    </>
  );
}

export default App;