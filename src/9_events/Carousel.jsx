import React from 'react';
import cn from 'classnames';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }

  next = (e) => {
    e.preventDefault();
    const { current } = this.state;
    const { images } = this.props;
    this.setState({ current: (current === images.length - 1 ? 0 : current + 1) });
  };

  prev = (e) => {
    e.preventDefault();
    const { current } = this.state;
    const { images } = this.props;
    this.setState({ current: (current === 0 ? images.length - 1 : current - 1) });
  };

  renderItems() {
    const { images } = this.props;
    const { current } = this.state;
    return images.map((image, index) => {
      return (
        <div key={image} className={cn('carousel-item', { active: index === current })}>
          <img alt="" className="d-block w-100" src={image} />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.renderItems()}
        </div>
        <a onClick={this.prev} className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={this.next} className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}