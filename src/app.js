import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import RepoFetchApp from "./components/RepoFetchApp";

ReactDOM.render(<RepoFetchApp />, document.getElementById("app"));
