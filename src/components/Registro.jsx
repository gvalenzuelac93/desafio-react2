import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { Card } from "react-bootstrap";

import React from "react";

export default function Registro({ errorApp, errorApp2, correcto }) {
  return (
    <div>
      <Card className="rounded border border-dark">
        <h1 className="my-3">Crea una cuenta</h1>
        <SocialButton
          icono1="https://cdn.icon-icons.com/icons2/790/PNG/512/fb_icon-icons.com_65434.png"
          icono2="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
          icono3="https://cdn.icon-icons.com/icons2/790/PNG/512/linkedin_icon-icons.com_65439.png"
        />
        <h5 className="fw-normal my-3">O usa tu mail para registrate</h5>
        <Formulario
          errorApp={errorApp}
          errorApp2={errorApp2}
          correcto={correcto}
        />
      </Card>
    </div>
  );
}
