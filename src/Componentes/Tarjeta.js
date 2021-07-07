import "./Tarjeta.css";
import Boton from "./Boton";

const Tarjeta = (props) => {
  console.log("Props Tarjeta", props);

  return (
    <article className="tarjeta">
      <h2>Producto {props.producto}</h2>
      <p>${props.precio}</p>
      <Boton></Boton>
    </article>
  );
};

export default Tarjeta;
