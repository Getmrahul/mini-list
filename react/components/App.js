var React = require("react");
var ReactRouter = require("react-router-dom");
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var Switch = ReactRouter.Switch;

// Components
//import components here
//

class App extends React.Component {
  render() {
    return (
      <div>
        // Add Navbar here
        <Switch>
          //<Route exact path="/" component={Home} />
          //<Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

module.exports = App;
