import cn from 'classnames';
import React from 'react';

export default class Alert extends React.Component {
  render() {
    const { type, text } = this.props;
    const alert = cn({
      alert: true,
      [`alert-${type}`]: true,
    });
    return (
      <div className={alert} role="alert">{text}</div>
    );
  }
}