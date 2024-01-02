import React, { useEffect, useState } from "react";
import Phonebook from "./components/Phonebook";
import axios from "axios";
import "./App.css";

const App = () => {
  // let url = "http://localhost:3001/api/persons";
  // axios
  //   .get(url)
  //   .then((response) => console.log("axios app response data", response.data))
  //   .catch((error) => console.log("error while fetching data: ", error));
  return (
    <div id="phonebook">
      <h1>Phonebook</h1>
      <Phonebook />
    </div>
  );
};

export default App;
