import { useState } from 'react';

import './cima.css';

type CimaProps = {
  movel: boolean;
};

const options = ['Principal', 'Contatos'];
const praOnde = ['sobre', 'cont'];

export default function Cima({ movel }: CimaProps) {
  const [escondido, setEscondido] = useState(true);

  const mostraOuNao = () => {
    const ondeFicaOptions = document.getElementById('options');
    const cima = document.getElementById('cima');

    if (escondido) {
      ondeFicaOptions?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        iterations: 1,
      });
      if (ondeFicaOptions) {
        ondeFicaOptions.style.visibility = 'visible';
        ondeFicaOptions.style.position = 'relative';
      }
      if (cima) {
        cima.style.borderBottomLeftRadius = '0px';
        cima.style.borderBottomRightRadius = '0px';
        cima.style.borderBottomColor = '#00000000';
      }
    } else {
      if (ondeFicaOptions) {
        ondeFicaOptions.style.visibility = 'hidden';
        ondeFicaOptions.style.position = 'absolute';
      }
      if (cima) {
        cima.style.borderBottomLeftRadius = '30px';
        cima.style.borderBottomRightRadius = '30px';
        cima.style.borderBottomColor = '#000';
      }
    }

    const tracinhos = document.getElementsByClassName('treco');
    for (const treco of tracinhos) {
      treco.animate([{ width: '80%' }, { width: '0px' }, { width: '80%' }], {
        duration: 500,
        iterations: 1,
      });
    }
    setEscondido(!escondido);
  };

  const vai = (e: React.MouseEvent<HTMLDivElement>) => {
    const destino = e.currentTarget.getAttribute('data-to');
    if (destino) {
      window.location.href = '#' + destino;
    }
  };

  const btns = () => {
    if (movel) {
      return (
        <div className="btnsCel" onClick={mostraOuNao}>
          <div className="treco" />
          <div className="treco" />
          <div className="treco" />
        </div>
      );
    }
    return (
      <div className="btns">
        {options.map((value, index) => (
          <div key={index} data-to={praOnde[index]} onClick={vai}>
            {value}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="navBar">
      <div className="cima" id="cima">
        <img src="logo.png" alt="logo" width={movel ? 125 : 200} />
        {btns()}
      </div>

      <div className="options" id="options" style={{ visibility: 'hidden', position: 'absolute' }}>
        {options.map((value, index) => (
          <div key={index} data-to={praOnde[index]} onClick={vai} className="option">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}