import { Children } from 'react';
import type { ReactNode } from 'react';

import './baixo1.css';

type Baixo1Props = {
  movel: boolean;
  children: ReactNode;
};

export default function Baixo1({ movel, children }: Baixo1Props) {
  const [titulo, texto] = Children.toArray(children);

  if (movel) {
    return (
      <div>
        <div className="textosCel">
          <div className="TextoCabecaCel">{titulo}</div>
          <div className="textinCel">{texto}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="textos">
      <div className="TextoCabeca">{titulo}</div>
      <div className="textin">{texto}</div>
    </div>
  );
}