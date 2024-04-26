import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";
import React from "react";
import { useState } from "react";

export default function App() {
  const [error1] = useState("Todos los campos son obligatorios");
  const [error2] = useState("Las contraseñas no coinciden o tienen menos de 6 caracteres");
  const [correcto] = useState("Ingreso correcto");
  return <Registro errorApp={error1} errorApp2={error2} correcto={correcto} />;
}
