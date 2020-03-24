import cn from 'classnames';
import React from 'react';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  leftActive = () => this.setActive('left');

  rightActive = () => this.setActive('right');

  setActive = (active) => {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;
    const sharedClasses = {
      btn: true,
      'btn-secondary': true,
    };

    const leftClasses = cn({ ...sharedClasses, left: true, active: active === 'left' });
    const rightClasses = cn({ ...sharedClasses, right: true, active: active === 'right' });

    return (
      <div className="btn-group" role="group">
        <button onClick={this.leftActive} type="button" className={leftClasses}>Left</button>
        <button onClick={this.rightActive} type="button" className={rightClasses}>Right</button>
      </div>
    );
  }
}