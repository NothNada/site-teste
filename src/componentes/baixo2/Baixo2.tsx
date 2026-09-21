import './baixo2.css';

type Baixo2Props = {
  id: string;
};

export default function Baixo2({ id }: Baixo2Props) {
  const telefone = '+55 (11) 98405-5827';

  return (
    <section className="textos2" id={id}>
      <div className="cabeca2">
        <h2>Contatos</h2>
      </div>
      <div className="textin2">
        <a className="contato" href="https://wa.me/5511984055827" target="_blank" rel="noreferrer">
          <img src="imgs/zapzap.png" alt="WhatsApp" />
          <span>{telefone}</span>
        </a>

        <a className="contato" href="tel:+5511984055827">
          <img src="imgs/tel.png" alt="Telefone" />
          <span>{telefone}</span>
        </a>
      </div>
    </section>
  );
}
