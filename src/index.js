// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Components
import "./index.scss";
import App from "./App";

// Font generator
const webfontsGenerator = require("webfonts-generator");

webfontsGenerator(
    {
        files: [
            "../src/assets/Karla-Regular.svg",
            "../src/assets/Karla-Bold.svg",
            "../src/assets/Gelion-Bold.svg"
        ],
        dest: "dest/"
    },
    function(error) {
        if (error) {
            console.log("Fail!", error);
        } else {
            console.log("Done!");
        }
    }
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
