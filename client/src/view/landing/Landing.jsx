import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to={"/home"}>
        <button>Pokedex</button>
      </Link>
    </div>
  );
};

export default Landing;
