import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  static defaultProps = {
    opened: true,
  }

  constructor(props) {
    super(props);
    const { opened } = this.props;
    this.state = { opened };
  }

  onClick = (e) => {
    e.preventDefault();
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    return (
      <div>
        <p>
          <a onClick={this.onClick} className="btn btn-primary" href="#">Link with href</a>
        </p>
        <div className={cn('collapse', { show: opened })}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}