import "./App.css";
import NavBar from "./components/navBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Animals from "./components/animals";
import Movies from "./components/movies";
import AddAnimal from "./components/addAnimal";
import SignUp from "./components/signUp";
import SignIn from "./components/sighIn";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/animals" element={<Animals />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/addAnimal" element={<AddAnimal />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
