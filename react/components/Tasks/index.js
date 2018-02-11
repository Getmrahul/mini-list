import React from "react";
require("./styles.scss");

class Tasks extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="content"> Mini-List 📝 </h1>
        <div className="taskList content">
          <form>
            <div className="form-group">
              <input
                className="ipBorders"
                type="text"
                placeholder="Input your tasks"
              />
            </div>
            <button className="content">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Tasks;
