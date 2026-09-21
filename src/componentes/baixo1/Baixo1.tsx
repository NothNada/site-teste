import type { ReactNode } from 'react';

import './baixo1.css';

type Baixo1Props = {
  id: string;
  titulo: string;
  children: ReactNode;
};

export default function Baixo1({ id, titulo, children }: Baixo1Props) {
  return (
    <div className="textos">
      <div className="TextoCabeca">
        <h1 id={id}>{titulo}</h1>
      </div>
      <div className="textin">{children}</div>
    </div>
  );
}