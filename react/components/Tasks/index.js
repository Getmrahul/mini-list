import React from "react";
require("./styles.scss");

class Tasks extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="baseStyle"> Mini-List 📝 </h1>
        <div className="taskList">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Input your tasks"
                required
              />
            </div>
            <button className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Tasks;
