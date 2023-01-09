import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AnimalContext } from "./../context/animalContext";

const AddAnimal = () => {
  const { AddAnimal } = useContext(AnimalContext);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [flying, setFlying] = useState(false);
  useEffect(() => {}, []);

  return (
    <div>
      <h3>Add Animal here</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddAnimal({ name: name, color: color, age: age, flying: flying });
        }}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="age"
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button style={{ backgroundColor: "green" }}>
          submit and add animal
        </button>
      </form>
    </div>
  );
};

export default AddAnimal;
