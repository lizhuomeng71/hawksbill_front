import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarContent from '../topbar/Topbar';

class Sidebar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, changeSidebarVisibility } = this.props;
    return (
      <div id="left-sidebar" className="sidebar">
        <SidebarContent
          changeMobileSidebarVisibility={changeMobileSidebarVisibility}
          changeSidebarVisibility={changeSidebarVisibility}
        />
        <div className="sidebar-scroll">
          <div className="user-account">
            <img
              src="/assets/images/user.png"
              className="rounded-circle user-photo"
              alt="User Profile"
            />
            <div className="dropdown">
              <span>Welcome,</span>
              <a
                href="/"
                className="dropdown-toggle user-name"
                data-toggle="dropdown"
              >
                <strong>Jessica Doe</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-right account animated flipInY">
                <li>
                  <a href="page-profile2.html">
                    <i className="icon-user" />
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="app-inbox.html">
                    <i className="icon-envelope-open" />
                    Messages
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-settings" />
                    Settings
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="page-login.html">
                    <i className="icon-power" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="row">
              <div className="col-4">
                <h6>5+</h6>
                <small>Experience</small>
              </div>
              <div className="col-4">
                <h6>400+</h6>
                <small>Persons</small>
              </div>
              <div className="col-4">
                <h6>80+</h6>
                <small>Clients</small>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#hr_menu">
                HR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#project_menu">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#sub_menu">
                <i className="icon-grid" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#setting">
                <i className="icon-settings" />
              </a>
            </li>
          </ul>
          <div className="tab-content p-l-0 p-r-0">
            <div className="tab-pane animated fadeIn active" id="hr_menu">
              <nav className="sidebar-nav">
                <ul className="main-menu metismenu">
                  <li className="active">
                    <a href="index.html">
                      <i className="icon-speedometer" />
                      <span>HR Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="app-holidays.html">
                      <i className="icon-list" />
                      Holidays
                    </a>
                  </li>
                  <li>
                    <a href="app-events.html">
                      <i className="icon-calendar" />
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="app-activities.html">
                      <i className="icon-badge" />
                      Activities
                    </a>
                  </li>
                  <li>
                    <a href="app-social.html">
                      <i className="icon-globe" />
                      HR Social
                    </a>
                  </li>
                  <li>
                    <a href="#Persons" className="has-arrow">
                      <i className="icon-users" />
                      <span>Persons</span>
                    </a>
                    <ul>
                      <SidebarLink route="/person" title="Employee" />
                      <li>
                        <a href="emp-leave.html">Leave Requests</a>
                      </li>
                      <SidebarLink route="/Role" title="Role" />
                      <SidebarLink route="/Department" title="Department" />
                    </ul>
                  </li>
                  <li>
                    <a href="#Accounts" className="has-arrow">
                      <i className="icon-briefcase" />
                      <span>Accounts</span>
                    </a>
                    <ul>
                      <li>
                        <a href="acc-payments.html">Payments</a>
                      </li>
                      <li>
                        <a href="acc-expenses.html">Expenses</a>
                      </li>
                      <li>
                        <a href="acc-invoices.html">Invoices</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Payroll" className="has-arrow">
                      <i className="icon-credit-card" />
                      <span>Payroll</span>
                    </a>
                    <ul>
                      <li>
                        <a href="payroll-payslip.html">Payslip</a>
                      </li>
                      <li>
                        <a href="payroll-salary.html">Person Salary</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Report" className="has-arrow">
                      <i className="icon-bar-chart" />
                      <span>Report</span>
                    </a>
                    <ul>
                      <li>
                        <a href="report-expense.html">Expense Report</a>
                      </li>
                      <li>
                        <a href="report-invoice.html">Invoice Report</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="app-users.html">
                      <i className="icon-user" />
                      Users
                    </a>
                  </li>
                  <li>
                    <a href="#Authentication" className="has-arrow">
                      <i className="icon-lock" />
                      <span>Authentication</span>
                    </a>
                    <ul>
                      <li>
                        <a href="page-login.html">Login</a>
                      </li>
                      <li>
                        <a href="page-register.html">Register</a>
                      </li>
                      <li>
                        <a href="page-lockscreen.html">Lockscreen</a>
                      </li>
                      <li>
                        <a href="page-forgot-password.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="page-404.html">Page 404</a>
                      </li>
                      <li>
                        <a href="page-403.html">Page 403</a>
                      </li>
                      <li>
                        <a href="page-500.html">Page 500</a>
                      </li>
                      <li>
                        <a href="page-503.html">Page 503</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="tab-pane animated fadeIn" id="project_menu">
              <nav className="sidebar-nav">
                <ul className="main-menu metismenu">
                  <li>
                    <a href="index2.html">
                      <i className="icon-speedometer" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="app-inbox.html">
                      <i className="icon-envelope" />
                      Inbox App
                    </a>
                  </li>
                  <li>
                    <a href="app-chat.html">
                      <i className="icon-bubbles" />
                      Chat App
                    </a>
                  </li>
                  <li>
                    <a href="#Projects" className="has-arrow">
                      <i className="icon-list" />
                      <span>Projects</span>
                    </a>
                    <ul>
                      <li>
                        <a href="project-add.html">Add Projects</a>
                      </li>
                      <SidebarLink route="/task" title="Projects List" />
                      <li>
                        <a href="project-detail.html">Projects Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Clients" className="has-arrow">
                      <i className="icon-user" />
                      <span>Clients</span>
                    </a>
                    <ul>
                      <li>
                        <a href="client-add.html">Add Clients</a>
                      </li>
                      <li>
                        <a href="client-list.html">Clients List</a>
                      </li>
                      <li>
                        <a href="client-detail.html">Clients Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="app-taskboard.html">
                      <i className="icon-tag" />
                      Taskboard
                    </a>
                  </li>
                  <li>
                    <a href="app-tickets.html">
                      <i className="icon-screen-tablet" />
                      Tickets
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="tab-pane animated fadeIn" id="sub_menu">
              <nav className="sidebar-nav">
                <ul className="main-menu metismenu">
                  <li>
                    <a href="#Blog" className="has-arrow">
                      <i className="icon-globe" /> <span>Blog</span>
                    </a>
                    <ul>
                      <li>
                        <a href="blog-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="blog-post.html">New Post</a>
                      </li>
                      <li>
                        <a href="blog-list.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#FileManager" className="has-arrow">
                      <i className="icon-folder" /> <span>File Manager</span>
                    </a>
                    <ul>
                      <li>
                        <a href="file-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="file-documents.html">Documents</a>
                      </li>
                      <li>
                        <a href="file-media.html">Media</a>
                      </li>
                      <li>
                        <a href="file-images.html">Images</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Widgets" className="has-arrow">
                      <i className="icon-puzzle" />
                      <span>Widgets</span>
                    </a>
                    <ul>
                      <li>
                        <a href="widgets-statistics.html">Statistics Widgets</a>
                      </li>
                      <li>
                        <a href="widgets-data.html">Data Widgets</a>
                      </li>
                      <li>
                        <a href="widgets-chart.html">Chart Widgets</a>
                      </li>
                      <li>
                        <a href="widgets-weather.html">Weather Widgets</a>
                      </li>
                      <li>
                        <a href="widgets-social.html">Social Widgets</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Pages" className="has-arrow">
                      <i className="icon-docs" />
                      <span>Extra Pages</span>
                    </a>
                    <ul>
                      <li>
                        <a href="page-blank.html">Blank Page</a>
                      </li>
                      <li>
                        <a href="page-profile2.html">Profile</a>
                      </li>
                      <li>
                        <a href="page-gallery.html">
                          Image Gallery
                          <span className="badge badge-default float-right">
                            v1
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="page-gallery2.html">
                          Image Gallery
                          <span className="badge badge-warning float-right">
                            v2
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="page-timeline.html">Timeline</a>
                      </li>
                      <li>
                        <a href="page-timeline-h.html">Horizontal Timeline</a>
                      </li>
                      <li>
                        <a href="page-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="page-invoices.html">Invoices</a>
                      </li>
                      <li>
                        <a href="page-invoices2.html">
                          Invoices
                          <span className="badge badge-warning float-right">
                            v2
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="page-search-results.html">Search Results</a>
                      </li>
                      <li>
                        <a href="page-helper-class.html">Helper Classes</a>
                      </li>
                      <li>
                        <a href="page-maintenance.html">Maintenance</a>
                      </li>
                      <li>
                        <a href="page-testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="page-faq.html">FAQs</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#uiElements" className="has-arrow">
                      <i className="icon-diamond" /> <span>UI Elements</span>
                    </a>
                    <ul>
                      <li>
                        <a href="ui-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="ui-tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="ui-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="ui-bootstrap.html">Bootstrap UI</a>
                      </li>
                      <li>
                        <a href="ui-icons.html">Icons</a>
                      </li>
                      <li>
                        <a href="ui-notifications.html">Notifications</a>
                      </li>
                      <li>
                        <a href="ui-colors.html">Colors</a>
                      </li>
                      <li>
                        <a href="ui-dialogs.html">Dialogs</a>
                      </li>
                      <li>
                        <a href="ui-list-group.html">List Group</a>
                      </li>
                      <li>
                        <a href="ui-media-object.html">Media Object</a>
                      </li>
                      <li>
                        <a href="ui-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="ui-nestable.html">Nestable</a>
                      </li>
                      <li>
                        <a href="ui-progressbars.html">Progress Bars</a>
                      </li>
                      <li>
                        <a href="ui-range-sliders.html">Range Sliders</a>
                      </li>
                      <li>
                        <a href="ui-treeview.html">Treeview</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#forms" className="has-arrow">
                      <i className="icon-pencil" /> <span>Forms</span>
                    </a>
                    <ul>
                      <li>
                        <a href="forms-validation.html">Form Validation</a>
                      </li>
                      <li>
                        <a href="forms-advanced.html">Advanced Elements</a>
                      </li>
                      <li>
                        <a href="forms-basic.html">Basic Elements</a>
                      </li>
                      <li>
                        <a href="forms-wizard.html">Form Wizard</a>
                      </li>
                      <li>
                        <a href="forms-dragdropupload.html">
                          Drag & Drop Upload
                        </a>
                      </li>
                      <li>
                        <a href="forms-cropping.html">Image Cropping</a>
                      </li>
                      <li>
                        <a href="forms-summernote.html">Summernote</a>
                      </li>
                      <li>
                        <a href="forms-editors.html">CKEditor</a>
                      </li>
                      <li>
                        <a href="forms-markdown.html">Markdown</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Tables" className="has-arrow">
                      <i className="icon-tag" /> <span>Tables</span>
                    </a>
                    <ul>
                      <li>
                        <a href="table-basic.html">
                          Tables Example
                          <span className="badge badge-info float-right">
                            New
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="table-normal.html">Normal Tables</a>
                      </li>
                      <li>
                        <a href="table-jquery-datatable.html">
                          Jquery Datatables
                        </a>
                      </li>
                      <li>
                        <a href="table-editable.html">Editable Tables</a>
                      </li>
                      <li>
                        <a href="table-color.html">Tables Color</a>
                      </li>
                      <li>
                        <a href="table-filter.html">
                          Table Filter
                          <span className="badge badge-info float-right">
                            New
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="table-dragger.html">
                          Table dragger
                          <span className="badge badge-info float-right">
                            New
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#charts" className="has-arrow">
                      <i className="icon-bar-chart" /> <span>Charts</span>
                    </a>
                    <ul>
                      <li>
                        <a href="chart-morris.html">Morris</a>
                      </li>
                      <li>
                        <a href="chart-flot.html">Flot</a>
                      </li>
                      <li>
                        <a href="chart-chartjs.html">ChartJS</a>
                      </li>
                      <li>
                        <a href="chart-jquery-knob.html">Jquery Knob</a>
                      </li>
                      <li>
                        <a href="chart-sparkline.html">Sparkline Chart</a>
                      </li>
                      <li>
                        <a href="chart-peity.html">Peity</a>
                      </li>
                      <li>
                        <a href="chart-c3.html">C3 Charts</a>
                      </li>
                      <li>
                        <a href="chart-gauges.html">Gauges</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Maps" className="has-arrow">
                      <i className="icon-map" /> <span>Maps</span>
                    </a>
                    <ul>
                      <li>
                        <a href="map-google.html">Google Map</a>
                      </li>
                      <li>
                        <a href="map-yandex.html">Yandex Map</a>
                      </li>
                      <li>
                        <a href="map-jvectormap.html">jVector Map</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="tab-pane animated fadeIn" id="setting">
              <div className="p-l-15 p-r-15">
                <h6>Choose Skin</h6>
                <ul className="choose-skin list-unstyled">
                  <li data-theme="purple">
                    <div className="purple" />
                    <span>Purple</span>
                  </li>
                  <li data-theme="blue">
                    <div className="blue" />
                    <span>Blue</span>
                  </li>
                  <li data-theme="cyan">
                    <div className="cyan" />
                    <span>Cyan</span>
                  </li>
                  <li data-theme="green">
                    <div className="green" />
                    <span>Green</span>
                  </li>
                  <li data-theme="orange" className="active">
                    <div className="orange" />
                    <span>Orange</span>
                  </li>
                  <li data-theme="blush">
                    <div className="blush" />
                    <span>Blush</span>
                  </li>
                </ul>
                <hr />
                <h6>General Settings</h6>
                <ul className="setting-list list-unstyled">
                  <li>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input type="checkbox" name="checkbox" id="a" />
                      <span>Report Panel Usage</span>
                    </label>
                  </li>
                  <li>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input type="checkbox" name="checkbox" />
                      <span>Email Redirect</span>
                    </label>
                  </li>
                  <li>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input type="checkbox" name="checkbox" defaultChecked />
                      <span>Notifications</span>
                    </label>
                  </li>
                  <li>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input type="checkbox" name="checkbox" defaultChecked />
                      <span>Auto Updates</span>
                    </label>
                  </li>
                  <li>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input type="checkbox" name="checkbox" />
                      <span>Offline</span>
                    </label>
                  </li>
                  <li>
                    <label className="fancy-checkbox" htmlFor="a">
                      <input type="checkbox" name="checkbox" defaultChecked />
                      <span>Location Permission</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
