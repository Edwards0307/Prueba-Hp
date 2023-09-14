import style from "./Card.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({
  id,
  nombre,
  foto,
}) {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <h2>{nombre}</h2>
      </div>

      <Link to={`/detail/${id}`}>
        <div className={style.info}>
          <img className={style.img} src={foto} alt="" />
        </div>
      </Link>

    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  ataque: PropTypes.number.isRequired,
  vida: PropTypes.number.isRequired,
  defensa: PropTypes.number.isRequired,
  velocidad: PropTypes.number.isRequired,
  foto: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
};
