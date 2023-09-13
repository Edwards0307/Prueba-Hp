import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons, resedPaged } from "../../redux/actions";
import { Card, Paged } from "../index";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  const currentPage = useSelector((state) => state.currentPage);

  /* const [currentPage, setCurrentPage] = useState(1); */ //Pagina en la que vamos arrancar
  const [pokemonsPerPage] = useState(15); // Cantidad de juegos que queremos por paginas

  // ahora voy a hacer logica numerica para el paginado
  const indexOfLastGame = currentPage * pokemonsPerPage; //15
  const indexOfFirstGame = indexOfLastGame - pokemonsPerPage; //0
  const currentPokemons = pokemons.slice(indexOfFirstGame, indexOfLastGame);

  // declaro una funcion que va a modificar el estado local de CurrentPage, esto lo voy a pasar
  // como prop al componente Paginated
  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className={style.containerWrapperList}>
      <div className={style.cardContainer}>
        {!currentPokemons.length ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          currentPokemons.map((pokemon) => {
            return (
              <div key={pokemon?.id} className={style.wrapperList}>
                <Card
                  id={pokemon?.id}
                  nombre={pokemon?.Nombre}
                  ataque={pokemon?.Ataque}
                  vida={pokemon?.Vida}
                  defensa={pokemon?.Defensa}
                  velocidad={pokemon?.Velocidad}
                  foto={pokemon?.Foto}
                  tipo={pokemon?.Tipo}
                />
              </div>
            );
          })
        )}
      </div>
      <Paged
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={pokemons.length}
        paged={paged}
      />
    </div>
  );
};

export default CardsContainer;
