import React, {Component} from 'react';

class SectionTitle extends Component {
  render() {
    return (
      <h2>{this.props.children}</h2>
    );
  }
}

export default SectionTitle;
