import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TopbarMenuLinks extends PureComponent {
  static propTypes = {
    a: PropTypes.string.isRequired,
  };

  render() {
    const { a } = this.props;

    return (
      <li>
        <a
          href="app-events.html"
          className="icon-menu d-none d-sm-block d-md-none d-lg-block"
        >
          <i className="icon-calendar" />
        </a>
      </li>
    );
  }
}

export default TopbarMenuLinks;
