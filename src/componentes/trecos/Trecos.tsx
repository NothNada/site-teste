import { useState } from 'react';

import './trecos.css';

type TrecosProps = {
  movel: boolean;
};

const ops = [
  'Onicocriptose',
  'Onicomicose',
  'Onicólise',
  'Onicogrifose',
  'Fissuras',
  'Calos e Calosidades',
  'Verruga Plantar',
  'Tungíase',
  'Bromidrose',
  'Ortoníquea',
];

const txtins = [
  (
    <div>
      <h3>Unha Encravada e Infeccionada</h3>
      <p>
        A onicocriptose é popularmente conhecida como unha encravada. Caracteriza-se com a presença de uma
        espícula que tem o seu crescimento para dentro dos tecidos em volta da unha. Causa dor e grande
        incômodo ao usar calçados fechados. Pode ser lateral ou bilateral (em um único canto ou nos dois
        cantos da unha). O encravamento espicular produz um estado distrófico que implica alteração do
        estado de saúde e vitalidade dos tecidos. Uma vez diagnosticada, a onicocriptose é classificada em
        quatro grupos:
      </p>
      <p>
        Onicocriptose grau I - Com a presença de espícula
        <br />
        Onicocriptose grau II - Apresenta infecção
        <br />
        Onicocriptose grau III - Com granuloma
        <br />
        Onicocriptose grau IV - Com granuloma piogênico
        <br />
        Duração do Tratamento: Em mãos habilidosas o procedimento de espiculaectomia dura bem menos de 1
        hora.
        <br />
        Técnica Podológica : O podólogo realizará a espiculaectomia (procedimento de retirada da espícula),
        fará toda a antissepsia necessária e o curativo oclusivo.
        <br />
        Recomendações: Recomenda-se ficar com o curativo e não molhar, retornar após 48hs para retirada do
        curativo e demais orientações necessárias.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Micose nas Unhas</h3>
      <p>
        É a infecção da lâmina e do leito ungueal causada por fungos. Entre as doenças que acometem as
        unhas, é a mais frequente, representando mais que 50% de todas as onicopatias, sendo a doença
        ungueal mais comum em nossos consultórios. Vista no passado como um problema essencialmente
        cosmético, atualmente é considerada uma doença debilitante. Tem efeitos físicos e psicológicos
        negativos sobre o paciente, podendo resultar em complicações e incapacidades. Assim, está claro o
        quanto é importante o tratamento dessa infecção fúngica ungueal. Causa dor e grande incômodo ao usar
        calçados fechados.
      </p>
      <p>
        Duração do Tratamento
        <br />
        É um tratamento de longa duração e deve seguir as indicações terapêuticas e higiênicas indicadas.
        <br />
        Técnica Podológica
        <br />
        O podólogo realizará a preparação prévia da unha. Se realizará um arraste dos tecidos afetados. Se
        procederá ao corte da unha afetada ou o desbaste com fresa. Necessário o tratamento com fitoterápico
        adequado.
        <br />
        Recomendações
        <br />
        Recomenda-se a desinfecção do calçado e meia já que devido às sujidades que se depositam nos mesmos,
        podem servir de cultivo dos fungos.
        <br />
        Adotar hábitos de higiene diariamente, lavar os pés e unhas com água e sabão neutro para eliminar
        partículas infectadas.
        <br />
        Secar o local com secador e aplicar o fungicida adequado indicado por sua podóloga.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Unhas Descoladas</h3>
      <p>
        Onicólise é o descolamento da lâmina ungueal do seu leito, inicia-se pela borda distal e vai
        acometendo toda a placa ungueal. A unha começa a se desprender pelas bordas até chegar à raiz. A
        causa normalmente é devido calçados inadequados, também pode ser consequência secundária de uma
        micose, entre outras.
      </p>
      <p>
        Duração do Tratamento:
        <br />
        A duração deste tratamento vai depender da quantidade de acometimento na lâmina ungueal.
        <br />
        Técnica Podológica:
        <br />
        Após avaliação clínica, a podóloga irá recomendar tratamento específico mais adequado para cada
        caso
        <br />
        Recomendações:
        <br />
        Recomenda-se o uso de calçados adequados, confortáveis, não usar meias e sapatos apertados.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Unhas Espessas</h3>
      <p>
        É uma hipertrofia da lâmina ungueal que se altera em sua morfologia (onicoanomalia) de tal maneira
        que pode adotar diferente forma. Por ex. para acima em forma de corno, para abaixo em forma de
        garra ou também lateralmente. Isto vai depender muitas vezes do calçado, da posição dos dedos e
        também da permanência do paciente em cama ou por falta de atenção. Apresenta estrias transversais,
        uma coloração cinza, marron ou amarelada, também pode apresentar manchas marcadas, com presença de
        deformação
      </p>
      <p>
        É constatada freqüentemente no indivíduo idoso. Na onicogrifose, ocorre espessamento de uma ou mais
        unhas e pela falta de cuidados, aumenta sua extensão e as unhas curvam-se como o chifre de um
        carneiro.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Rachadura nos pés</h3>
      <p>
        Fissuras são rachaduras que acometem os pés e o principal motivo é devido a falta de hidratação na
        pele. Seu aparecimento pode ocorrer por vários motivos, tais como: defeitos ortopédicos,
        hereditariedade, alterações climáticas, conseqüência de psoríase, diabetes, doenças vasculares,
        micose, agressões químicas, andar descalço e uso de calçados abertos nos calcanhares, etc.
      </p>
      <p>
        Técnica Podológica:
        <br />
        O tratamento podológico para este caso consiste em desbaste do local, caso haja necessidade,
        lixamento e hidratação. Aqui no Hospital dos Pés utilizamos a parafina como método de tratamento de
        fissuras. Trata-se de uma hidratação profunda, que ativa a circulação trazendo bem-estar,
        relaxamento e conforto ao pisar.
        <br />
        Recomendações:
        <br />
        Recomendamos a ingestão de água, pois é o principal meio de hidratação, e também o uso de um
        hidratante específico para os pés, pois a pele que recobre a região plantar é mais espessa, um
        hidratante corporal não consegue penetrar com a eficácia necessária.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Calos e Calosidades</h3>
      <p>
        É uma camada extra de pele que é formada em locais sob constante pressão devido a agressões como
        calçados apertados, salto alto, bico fino, atividades que colocam pressão sobre os pés e alterações
        estruturais dos pés. Aparecem como uma tentativa de proteção e defesa do corpo. O calo se desenvolve
        nas saliências ósseas da parte de cima dos dedos e na pele entre os mesmos. São duros, sensíveis ao
        toque e arredondados. Em seu centro pode ou não formar-se um pequeno núcleo. As calosidades são
        espessamentos da pele. Podem surgir em qualquer parte do corpo que esteja sob constante pressão. Nos
        pés são frequentes nas regiões do calcanhar e metatarso. Os calos ou calosidades apresentam três
        formas clinicas distintas: helomas, tilomas e hiperqueratoses.
      </p>
      <p>
        Técnica Podológica:
        <br />
        O podólogo realizará a preparação prévia da pele, procedendo em seguida com o desbaste do calo e
        calosidade.
        <br />
        Recomendações:
        <br />
        Só é possível eliminar definitivamente um calo ou calosidade se for eliminada a causa que o origina,
        seja ela externa, como o calçado inadequado, ou interna como uma alteração estrutural do pé.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Olho-de-Peixe</h3>
      <p>
        Popularmente conhecida como "olho-de-peixe", a verruga plantar se apresenta como um espessamento e
        elevação da pele dos pés, com uma região amarelada e um ou mais pontos negros centrais. É causada
        pelo vírus do papiloma humano HPV, frequentemente provoca dores ou incômodo ao caminhar.
      </p>
      <p>
        Técnica Podológica:
        <br />
        O tratamento podológico envolve o uso de crioterapia (congelamento). Se esse tratamento não
        funcionar, o médico pode recorrer a procedimentos cirúrgicos para retirar as verrugas, mas isso
        raramente é necessário.
        <br />
        Recomendações:
        <br />
        Para reduzir o risco de adquirir ou espalhar as verrugas que já tenha, o paciente deve evitar
        contato com as verrugas. Deve manter seus pés secos e limpos, não cutucar as verrugas para não
        espalhar o vírus, lavar bem suas mãos depois de tocar em uma verruga. É recomendável que na
        vigência de verrugas o paciente não frequente ambientes que facilitem a inoculação viral em outras
        pessoas tais como piscinas, clubes, banheiros públicos, etc. O melhor é tratá-las assim que
        aparecerem.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Bicho-de-Pé</h3>
      <p>
        É uma doença causada pela Tunga Penetrans, um tipo de pulga encontrada no solo, principalmente em
        pastos. A pulga fêmea penetra a pele, onde suga o sangue do hospedeiro e começa a produzir ovos que
        se desenvolvem e serão posteriormente eliminados no solo. As áreas mais afetadas são os pés e é
        comum haver coceira. Pode ocorrer infecção secundária, com dor local e secreção purulenta.
      </p>
      <p>
        Tratamento Podológico:
        <br />
        O tratamento consiste na remoção completa da pulga com bisturi. Em caso de infecção secundária, pode
        ser necessário o uso de curativos oclusivos
        <br />
        Recomendações:
        <br />
        Caso não esteja com suas vacinas em dia, recomendamos procurar um posto de saúde para tomar vacina
        antitétano
      </p>
    </div>
  ),
  (
    <div>
      <h3>Chulé</h3>
      <p>
        A Bromidrose é comumente conhecida como "chulé", trata-se do odor fétido nos pés e é causada pelo
        suor excessivo aliado a um tipo de bactéria que causa o mau cheiro, portanto não necessariamente
        significa falta de higiene. Usar o mesmo sapato diariamente e também o uso de meias de tecidos
        sintéticos que não proporcionam a ventilação adequada aos pés podem ocasionar a bromidrose.
      </p>
      <p>
        Técnica Podológica:
        <br />
        O Podólogo além de efetuar o tratamento, passa a orientar certas atitudes tais como: a troca de
        meias sintéticas por meias de algodão, troca de sapatos e tênis que por ventura estejam impregnados
        pelo forte odor.
        <br />
        Recomendações:
        <br />
        Lavar e secar bem os pés;
        <br />
        Expor os calçados ao sol;
        <br />
        Alternar o uso dos sapatos;
        <br />
        Não repetir as meias;
        <br />
        Recomendamos ainda o uso de talcos antissépticos e sprays desodorizantes;
        <br />
        Essas ações devem ser feitas diariamente para ter um bom resultado. Quando não são feitas, os fungos
        e as bactérias voltam a se proliferar e o cheiro também volta.
      </p>
    </div>
  ),
  (
    <div>
      <h3>Órtese nas Unhas</h3>
      <p>Temos a solução para as unhas encravadas! Na podologia, utilizamos o tratamento de onicoórtese para
        a correção da curvatura da lâmina ungueal</p>
      Trata-se de um dispositivo que é aplicado na unha, que age com uma força de tração com a função de
      corrigir o seu crescimento. É usado para a reeducação do crescimento das unhas, essa correção é
      parcial ou total;
      <br />
      Visa o desaparecimento da pressão da lâmina nos sulcos ungueais, trazendo alívio das dores; é
      indicado para casos de onicocriptose;
      <br />
      A manutenção é feita periodicamente.
    </div>
  ),
];

export default function Trecos({ movel }: TrecosProps) {
  const [sindex, setSindex] = useState(0);

  const cliquei = (i: number) => {
    setSindex(i);
  };

  const bota = () => {
    return ops.map((value, index) => (
      <a key={index} className={sindex === index ? 'selected' : ''} onClick={() => cliquei(index)}>
        {value}
      </a>
    ));
  };

  if (movel) {
    return (
      <div className="tudoCel">
        <div className="opcoesCel">{bota()}</div>
        <div className="viewCel">{txtins[sindex]}</div>
      </div>
    );
  }

  return (
    <div className="tudo">
      <div className="opcoes">{bota()}</div>
      <div className="view">{txtins[sindex]}</div>
    </div>
  );
}