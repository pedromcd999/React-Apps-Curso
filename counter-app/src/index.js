import React from "react";
import { createRoot } from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
import "./index.css";


const divRoot = document.querySelector("#root");

createRoot(divRoot).render(<PrimeraApp/>);