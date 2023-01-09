import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-§-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <Link to="/movies">
              <a class="nav-link" href="/movies">
                Movies
              </a>
            </Link>
            <Link to="/animals">
              <a class="nav-link">Animals</a>
            </Link>
            <Link to="/addAnimal">
              <a class="nav-link" href="#">
                add Animals
              </a>
            </Link>
            <a class="nav-link" href="#">
              add Movie
            </a>
            <Link to="/signUp">
              <a class="nav-link" href="#">
                sign Up{" "}
              </a>
            </Link>
            <Link to="/signIn">
              <a class="nav-link" href="#">
                sign In{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
