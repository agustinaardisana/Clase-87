import "./App.css";
import Tarjeta from "./Componentes/Tarjeta";
// import Boton from "./Componentes/Boton";

const App = () => {
  return (
    <div>
      <Tarjeta precio="200" producto="a"></Tarjeta>
      <Tarjeta precio="300" producto="b"></Tarjeta>
      <Tarjeta precio="400" producto="c"></Tarjeta>
      <Tarjeta precio="500" producto="d"></Tarjeta>
      <Tarjeta precio="600" producto="e"></Tarjeta>
    </div>
  );
};

export default App;
