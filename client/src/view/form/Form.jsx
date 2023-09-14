import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div>
      <Link to={"/home"}>
        <button>Back</button>
      </Link>
      <h1>Pendiente por hacer</h1>
    </div>
  );
};

export default Form;
