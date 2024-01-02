import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

let data = [
  {
    id: 1,
    name: "number",
    number: "9891919119",
  },
  {
    id: 2,
    name: "number",
    number: "1919191919191",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App db={data} />
  </React.StrictMode>
);
