import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: '',
    };
  }

  handleRemove = (id) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const newItems = tasks.filter((item) => item.id !== id);
    this.setState({ tasks: newItems });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { target } = e;
    this.setState({ text: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, tasks } = this.state;
    this.setState({ tasks: [{ id: uniqueId(), value: text }, ...tasks] });
    this.setState({ text: '' });
  }

  render() {
    const { tasks, text } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
            <div className="form-group">
              <input onChange={this.handleChange} type="text" value={text} required className="form-control mr-3" placeholder="I am going..." />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {tasks.map((task) => (
          <Item key={task.id} id={task.id} onRemove={this.handleRemove} value={task.value} />
        ))}
      </div>
    );
  }
}