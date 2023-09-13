import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Detail, Form, Home, Landing } from "./view/index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
