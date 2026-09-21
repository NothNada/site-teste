import Cima from './componentes/cima/Cima';
import Baixo1 from './componentes/baixo1/Baixo1';
import Localizacao from './componentes/localizacao/Localizacao';
import Baixo2 from './componentes/baixo2/Baixo2';
import Rodape from './componentes/rodape/Rodape';
import Trecos from './componentes/trecos/Trecos';

import './App.css';

function App() {
  return (
    <div className="site-shell">
      <div className="page-background" aria-hidden="true">
        <span className="page-circle page-circle-one" />
        <span className="page-circle page-circle-two" />
        <span className="page-circle page-circle-three" />
        <span className="page-circle page-circle-four" />
        <span className="page-circle page-circle-five" />
      </div>

      <div className="site-content">
        <Cima />
        <main>
          <Baixo1 id="sobre" titulo="Cuidado especializado para caminhar melhor">
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
        </main>

        <Rodape />
      </div>
    </div>
  );
}

export default App;
