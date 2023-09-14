import style from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetails = useSelector((state) => state.pokemonDetail);


  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, []);

  return (
    <div key={pokemonDetails.ID}>
      <Link to={"/home" }>
      <button >Back</button>
      </Link>
      <h1>{pokemonDetails?.Nombre}</h1>

      <img className={style.img} src={pokemonDetails?.Foto} alt="" />

      <br></br>

      <label>Vida: </label>
      <p>{pokemonDetails?.Vida}</p>

      <label>Ataque: </label>
      <p>{pokemonDetails?.Ataque}</p>

      <label>Defensa: </label>
      <p>{pokemonDetails?.Defensa}</p>

      <label>Velocidad: </label>
      <p>{pokemonDetails?.Velocidad}</p>

      <label>Altura: </label>
      <p>{pokemonDetails?.Altura}</p>

      <label>Peso: </label>
      <p>{pokemonDetails?.Peso}</p>

      <label>Tipo: </label>
      <p>{pokemonDetails?.Tipo}</p>
    </div>
  );
};

export default Detail;
