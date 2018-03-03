import React, {Component} from 'react';

class SectionParagraph extends Component {
  render() {
    return (
      <p>{this.props.children}</p>
    );
  }
}

export default SectionParagraph;
