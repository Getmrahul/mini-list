import React from "react";
require("./styles.scss");

class MiniList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    const json = localStorage.getItem("tasks");
    const tasks = JSON.parse(json);

    if (tasks) this.setState({ tasks: tasks });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem("tasks", json);
    }
  }
  DeleteTask = removeTask => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => {
        return removeTask !== task;
      })
    }));
  };
  AddTask = task => {
    // alert(task);
    this.setState(prevState => ({
      tasks: prevState.tasks.concat([task])
    }));
  };
  render() {
    const title = "MiniList 📝 ";
    return (
      <div>
        <AppTitle title={title} />
        <AddTask AddTask={this.AddTask} />
        <Tasks tasks={this.state.tasks} DeleteTask={this.DeleteTask} />
      </div>
    );
  }
}

class AddTask extends React.Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();

    const task = e.target.elements.tasks.value.trim();
    e.target.elements.tasks.value = " ";

    if (task) {
      this.props.AddTask(task);
    }
  }
  render() {
    return (
      <div className="content container">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="tasks"
            placeholder="Input your tasks"
            className="ipBorders"
          />
          <button className="addButton">ADD</button>
        </form>
      </div>
    );
  }
}

const AppTitle = props => {
  return (
    <div className="container">
      <h1 className="content"> {props.title}</h1>
    </div>
  );
};

const Tasks = props => {
  return (
    <div className="container">
      {props.tasks.map(task => (
        <Task key={task} taskInput={task} DeleteTask={props.DeleteTask} /> //key coz unique key error in children.
      ))}
    </div>
  );
};

const Task = props => {
  return (
    <div className="TaskList">
      {props.taskInput}
      <button
        id="remove"
        className="removeButton"
        onClick={e => {
          props.DeleteTask(props.taskInput);
        }}
      >
        Remove
      </button>
    </div>
  );
};

module.exports = MiniList;
