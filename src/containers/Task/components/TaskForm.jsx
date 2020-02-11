/* eslint-disable  */
import React, { PureComponent } from 'react';
import {
  Card, CardBody,CardHeader, Col, Row, Button, ButtonToolbar,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import renderInputField from '../../../shared/components/form/InputField';
import renderSelectField from '../../../shared/components/form/SelectField';
import renderDatePickerField from '../../../shared/components/form/DatePicker';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class TaskForm extends PureComponent {
  static propTypes = {
    personList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { onReadPersonList, onReadRoleList, onReadDepartmentList } = this.props;
    onReadDepartmentList();
  }

  handleDepartmentChange(event){
    let departmentId = event.target.value
    const { onReadRoleList } = this.props;
    onReadRoleList(departmentId);
  }

  render() {
    const {
      personList,
      roleList,
      departmentList,
      handleSubmit,
      reset,
      submitting,
      match: { params },
    } = this.props;
    const priorities = [{'_key': '1', 'name': 'High'}, {'_key': '2', 'name': 'Medium'}, {'_key': '3', 'name': 'Low'}];
    const prioritiesOptions = [];
    for ( var i=0,j=priorities.length;i<j;i++ ) {
      prioritiesOptions.push( { value: priorities[i]._key, label: priorities[i].name } );
    }

    return (
      <Row>
        <Col lg={12}>
          <form className="form" onSubmit={handleSubmit}>

          <Card>
            <CardBody>
                <Row>
                  <Col lg="12">
                    <Field
                      label="Project Name"
                      name="name"
                      component={renderInputField}
                      placeholder="Project Name *"
                    />
                  </Col>
                  <Col md="4" sm="12">
                    <Field
                      label="Assign To Department"
                      name="department"
                      component={renderSelectField}
                      placeholder="Assign To"
                      options={departmentList}
                      onChange={this.handleDepartmentChange.bind(this)}
                    />
                  </Col>
                  <Col md="4" sm="12">
                    <Field
                      label="Assign To Role"
                      name="role"
                      component={renderSelectField}
                      placeholder="Assign To"
                      options={roleList}
                    />
                  </Col>
                  <Col md="4" sm="12">
                    <Field
                      label="Assign To Person"
                      name="person"
                      component={renderSelectField}
                      placeholder="Assign To"
                      options={personList}
                    />
                  </Col>
                  <Col md="3" sm="12">
                    <Field
                      name="startDate"
                      label="Start Date"
                      placeholder="Start Date *"
                      component={renderDatePickerField}
                    />
                  </Col>
                  <Col md="3" sm="12">
                    <Field
                      name="endDate"
                      label="End date"
                      placeholder="End date *"
                      component={renderDatePickerField}
                    />
                  </Col>

                  <Col md="3" sm="12">
                    <Field
                      name="client_name"
                      label="Priority"
                      component={renderSelectField}
                      placeholder="Select Priority"
                      options={prioritiesOptions}
                    />
                  </Col>
                </Row>

                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    Review Chain
                  </CardHeader>
                  <CardBody>

                <Row>
                  {console.log(departmentList)}
                  <Col lg="12">
                    <Typeahead
                      labelKey="name"
                      multiple
                      onChange={(selected) => {
                        // Handle selections...
                      }}
                      options={departmentList}
                    />
                  </Col>
                </Row>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <Row>
                  <div className="col-md-3 col-sm-12">
                    <label>
                      Select Rate in Doller
                    </label>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Rate *" />
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-12">

                    <label>Type</label>

                    <div className="form-group">

                      <select className="form-control show-tick">

                        <option>

                          Select Type
                        </option>

                        <option>Hourly</option>

                        <option>Fixed</option>

                      </select>

                    </div>

                  </div>

                  <div className="col-md-3 col-sm-12">

                    <label>

                      Select Team Lead
                    </label>

                    <div className="form-group">

                      <select className="form-control show-tick">

                        <option>Select</option>

                        <option>

                          Marshall Nichols
                        </option>

                        <option>

                          Susie Willis
                        </option>

                        <option>

                          Hossein Shams
                        </option>

                        <option>

                          Fidel Tonn
                        </option>

                        <option>

                          Frank Camly
                        </option>

                        <option>

                          Debra Stewart
                        </option>

                        <option>

                          Tim Hank
                        </option>

                      </select>

                    </div>

                  </div>



                </Row>

                <Row>

                  <div className="col-12">

                    <input type="file" className="dropify" />

                    <div className="mt-3" />

                  </div>

                  <div className="col-sm-12">

                    <div className="summernote">

                      Hello there,
                      <br />
                      <p>

                        The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.
                      </p>

                      <p>

                        Please try <b>paste some texts</b> here
                      </p>

                    </div>

                  </div>
                </Row>
                <Row>
                  <Col lg="12">
                    <ButtonToolbar className="form__button-toolbar">
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                      &nbsp;
                      <Button color="secondary" type="button" onClick={reset}>
                            Cancel
                      </Button>
                    </ButtonToolbar>
                  </Col>
                </Row>
            </CardBody>
          </Card>
        </form>

        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let parentId = state.task.item._id ? state.task.item._id : 0;
  return {
    initialValues: {
      parent_task: parentId
    }
  }
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'TaskCreate',
  enableReinitialize : true // this is needed!!
})(TaskForm)))
