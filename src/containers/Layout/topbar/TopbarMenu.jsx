import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TopbarMenuLink from './TopbarMenuLink';

class TopbarMenu extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,

  };

  render() {
    const { title } = this.props;

    return (
      <div id="navbar-menu">
        <ul className="nav navbar-nav">
          <TopbarMenuLink title={title} />
          <TopbarMenuLink />
          <TopbarMenuLink />
          <TopbarMenuLink />
          <TopbarMenuLink />
        </ul>
      </div>
    );
  }
}

export default TopbarMenu;
