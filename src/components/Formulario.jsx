import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alerts from "./Alert";

const Formulario = ({ errorApp, errorApp2, correcto }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [error, setError] = useState(false);
  const [confirmacion, setConfirmacion] = useState(false);
  const [exito, setExito] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      checkPassword === ""
    ) {
      setError(true);
      setExito(false);
      return;
    }
    setError(false);
    setConfirmacion(false);
    if (password != checkPassword || password.length < 6) {
      setConfirmacion(true);
      setExito(false);
      return;
    } else {
      setExito(true);
    }
    if (exito === true) {
      setExito(false);
    }
    setNombre("");
    setEmail("");
    setPassword("");
    setCheckPassword("");
  };

  return (
    <form className="formulario" onSubmit={validarDatos}>
      <div className="form-group my-3">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="form-control"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="password"
          name="check-password"
          placeholder="Confirma tu contraseña"
          className="form-control"
          onChange={(e) => setCheckPassword(e.target.value)}
          value={checkPassword}
        />
      </div>
      <div className="d-grid gap-2">
        <Button variant="success" type="submit" className="px-5 mt-3">
          Registrarse
        </Button>
      </div>
      <div className="form-group my-2">
        {error ? <Alerts textAlert={errorApp} colorAlert={"danger"} /> : null}
        {confirmacion ? (
          <Alerts textAlert={errorApp2} colorAlert={"danger"} />
        ) : null}
        {exito ? <Alerts textAlert={correcto} colorAlert={"success"} /> : null}
      </div>
    </form>
  );
};

export default Formulario;
