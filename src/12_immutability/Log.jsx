import _ from 'lodash';
import React from 'react';

export default class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      items: [],
    };
  }

  onInc = (e) => {
    e.preventDefault();
    this.addItem(1);
  };

  onDec = (e) => {
    e.preventDefault();
    e.preventDefault();
    this.addItem(-1);
  }

  removeItem = (id) => (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  };

  addItem(value) {
    const { count, items } = this.state;
    const newValue = count + value;
    const newItem = { id: _.uniqueId(), value: newValue };
    this.setState({
      count: newValue,
      items: [newItem, ...items],
    });
  }

  renderItems() {
    const { items } = this.state;
    return (
      <div className="list-group">
        {items.map(({ id, value }) => (
          <button key={id} onClick={this.removeItem(id)} type="button" className="list-group-item list-group-item-action">{value}</button>
        ))}
      </div>
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="btn-group" role="group">
          <button onClick={this.onInc} type="button" className="btn hexlet-inc">+</button>
          <button onClick={this.onDec} type="button" className="btn hexlet-dec">-</button>
        </div>
        {items.length > 0 ? this.renderItems() : null}
      </div>
    );
  }
}