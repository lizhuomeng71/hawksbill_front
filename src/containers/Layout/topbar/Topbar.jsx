import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TopbarMenu from './TopbarMenu';

class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, changeSidebarVisibility } = this.props;
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-btn">
            <button type="button" className="btn-toggle-offcanvas">
              <i className="lnr lnr-menu fa fa-bars" />
            </button>

          </div>
          <div className="navbar-brand">
            <a href="index.html">
              <img
                src="/assets/images/logo.svg"
                alt="Lucid Logo"
                className="img-responsive logo"
              />
            </a>
          </div>
          <div className="navbar-right">
            <form id="navbar-search" className="navbar-form search-form">
              <input
                defaultValue
                className="form-control"
                placeholder="Search here..."
                type="text"
              />
              <button type="button" className="btn btn-default">
                <i className="icon-magnifier" />
              </button>
            </form>
            <TopbarMenu
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
              changeSidebarVisibility={changeSidebarVisibility}
            />
          </div>
        </div>
      </nav>
    );
  }
}
export default Topbar;
