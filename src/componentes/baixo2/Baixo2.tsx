import { Children } from 'react';
import type { ReactNode } from 'react';

import './baixo2.css';

type Baixo2Props = {
  movel: boolean;
  children: ReactNode;
};

export default function Baixo2({ movel, children }: Baixo2Props) {
  const [titulo, img1, txt1, img2, txt2] = Children.toArray(children);

  if (movel) {
    return (
      <div className="textosCel2">
        <div className="TextoCabecaCel2">{titulo}</div>
        <div className="textinCel2">
          <div className="textoComImgCel">
            {img1}
            <div className="txtImgCel">{txt1}</div>
          </div>

          <div className="textoComImgCel">
            {img2}
            <div className="txtImgCel">{txt2}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="textos2">
      <div className="TextoCabeca2">{titulo}</div>
      <div className="textin2">
        <div className="textoComImg">
          {img1}
          <div className="txtImg">{txt1}</div>
        </div>

        <div className="textoComImg">
          {img2}
          <div className="txtImg">{txt2}</div>
        </div>
      </div>
    </div>
  );
}