import { useState } from 'react';

import './cima.css';

const options = [
  { label: 'Principal', destino: 'sobre' },
  { label: 'Tratamentos', destino: 'tratamentos' },
  { label: 'Localização', destino: 'local' },
  { label: 'Contatos', destino: 'cont' },
];

export default function Cima() {
  const [aberto, setAberto] = useState(false);

  const vai = (destino: string) => {
    setAberto(false);
    document.getElementById(destino)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="navBar">
      <div className="cima">
        <img src="logo.png" alt="Logo Podologia e Saúde Mooca" width={180} />
        <nav className="btns" aria-label="Navegação principal">
          {options.map((op) => (
            <button key={op.destino} type="button" onClick={() => vai(op.destino)}>
              {op.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="btnsCel"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          onClick={() => setAberto(!aberto)}
        >
          <div className="treco" />
          <div className="treco" />
          <div className="treco" />
        </button>
      </div>

      <nav
        id="menu-mobile"
        className={`options${aberto ? ' aberto' : ''}`}
        aria-label="Navegação mobile"
        aria-hidden={!aberto}
      >
        {options.map((op) => (
          <button key={op.destino} type="button" onClick={() => vai(op.destino)}>
            {op.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
