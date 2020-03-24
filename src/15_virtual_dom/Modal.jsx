import cn from 'classnames';
import React from 'react';

const Header = ({ toggle, children }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button onClick={toggle} type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
);

const Body = ({ children }) => <p className="modal-body">{children}</p>;

const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class Modal extends React.Component {
  static Body = Body;

  static Header = Header;

  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    return (
      <div className={cn('modal', { fade: isOpen, show: isOpen })} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}