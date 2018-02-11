var React = require("react");
var ReactRouter = require("react-router-dom");
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var Switch = ReactRouter.Switch;

// Components
var Tasks = require("./Tasks");

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Tasks} />
        </Switch>
      </div>
    );
  }
}

module.exports = App;
