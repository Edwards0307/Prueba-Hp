import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  nombre,
  ataque,
  vida,
  defensa,
  velocidad,
  foto,
  tipo,
}) {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <h2>{nombre}</h2>
      </div>

      <Link to={`/Detail/${id}`}>
        <div className={style.info}>
          <img className={style.img} src={foto} alt="" />
        </div>
      </Link>

      <h4>Ataque: {ataque}</h4>

      <h4>Vida: {vida}</h4>
    </div>
  );
}
