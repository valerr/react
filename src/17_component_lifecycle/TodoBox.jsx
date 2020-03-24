import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item';
import routes from './routes';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tasks: [],
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = async () => {
    const res = await axios.get(routes.tasksPath());
    this.setState({ tasks: res.data });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    const res = await axios.post(routes.tasksPath(), { text: inputValue });
    const { tasks } = this.state;
    this.setState({ inputValue: '', tasks: [res.data, ...tasks] });
  }

  changeStatus = (task) => async () => {
    if (task.state === 'finished') {
      await axios.patch(routes.activateTaskPath(task.id));
    } else {
      await axios.patch(routes.finishTaskPath(task.id));
    }
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === task.id);
    const newState = task.state === 'finished' ? 'active' : 'finished';
    const updated = update(tasks, { [index]: { $merge: { state: `${newState}` } } });
    this.setState({ tasks: updated });
  }

  renderTasks(taskState) {
    const { tasks } = this.state;
    const filtered = tasks.filter(({ state }) => state === taskState);

    if (filtered.length === 0) {
      return null;
    }

    return (
      <div className={`todo-${taskState}-tasks`}>
        {filtered.map((task) => (
          <Item key={task.id} task={task} onClick={this.changeStatus(task)} />
        ))}
      </div>
    );
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input
                type="text"
                onChange={this.handleChange}
                value={inputValue}
                required
                className="form-control mr-3"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {this.renderTasks('active')}
        {this.renderTasks('finished')}
      </div>
    );
  }
}
