import './localizacao.css';

const ENDERECO = 'R. Amapá Grande, 31 - Vila Canero, São Paulo - SP, 03191-020';

const HORARIOS: Array<[string, string]> = [
  ['Segunda-feira', '14h às 20h'],
  ['Terça a Sexta-feira', '9h às 20h'],
  ['Sábado', '9h às 15h'],
  ['Domingo', 'Fechado'],
];

export default function Localizacao() {
  const enderecoCodific = encodeURIComponent(ENDERECO);

  return (
    <div className="localizacao" id="local">
      <div className="cabecaLocal">
        <h1>Localização</h1>
      </div>

      <div className="corpoLocal">
        <div className="bloco">
          <h2>Endereço</h2>
          <p className="endereco">{ENDERECO}</p>
          <a
            className="linkMaps"
            href={`https://www.google.com/maps/search/?api=1&query=${enderecoCodific}`}
            target="_blank"
            rel="noreferrer"
          >
            Ver no Google Maps
          </a>
        </div>

        <div className="bloco">
          <h2>Horário de Funcionamento</h2>
          <ul className="horarios">
            {HORARIOS.map(([dia, hora]) => (
              <li key={dia}>
                <span>{dia}</span>
                <strong>{hora}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="bloco">
          <h2>Sobre a Clínica</h2>
          <p>
            Espaço especializado em tratamentos podológicos para todas as idades — do público
            infantil à terceira idade. Recomendamos agendamento prévio de horários.
          </p>
          <p>
            <strong>WhatsApp:</strong>{' '}
            <a href="https://wa.me/5511984055827" target="_blank" rel="noreferrer">
              +55 (11) 98405-5827
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}