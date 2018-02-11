// Dev. Pack.
var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router-dom").BrowserRouter;

// Components
var App = require("./components/App");

// Other Requirements
require("./index.scss");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
