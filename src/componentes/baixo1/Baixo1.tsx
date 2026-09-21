import type { ReactNode } from 'react';

import './baixo1.css';

type Baixo1Props = {
  id: string;
  titulo: string;
  children: ReactNode;
};

export default function Baixo1({ id, titulo, children }: Baixo1Props) {
  return (
    <section className="textos hero">
      <div className="hero-background" aria-hidden="true">
        <span className="circle circle-one" />
        <span className="circle circle-two" />
        <span className="circle circle-three" />
        <span className="circle circle-four" />
        <span className="circle circle-five" />
      </div>
      <div className="TextoCabeca">
        <h1 id={id}>{titulo}</h1>
      </div>
      <div className="textin">{children}</div>
    </section>
  );
}
