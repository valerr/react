import $ from 'jquery';
import React from 'react';

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    $(this.ref.current).markdown({
      iconlibrary: 'fa',
      onChange: (e) => {
        const content = e.getContent();
        const { onContentChange } = this.props;
        onContentChange(content);
      },
    });
  }

  render() {
    return (
      <div ref={this.ref} />
    );
  }
}