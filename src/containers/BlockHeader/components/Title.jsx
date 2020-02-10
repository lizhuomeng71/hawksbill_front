import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Title extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <h2>
        <a
          href="/"
          className="btn btn-xs btn-link btn-toggle-fullwidth"
        >
          <i className="fa fa-arrow-left" />
        </a>
        {title}
      </h2>
    );
  }
}

export default Title;
