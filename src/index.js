import React from "react";
import ReactDOM from "react-dom";
import "mdbreact/dist/css/mdb.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./assets/scss/mdb.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
