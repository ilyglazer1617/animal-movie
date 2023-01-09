import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Animals() {
  const [names, setname] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://localhost:3002/api/animals");
      setname(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ol>
        {names.map((name) => (
          <li key={name.id}>
            {name.name} {name.color}
          </li>
        ))}
      </ol>
    </div>
  );
}
