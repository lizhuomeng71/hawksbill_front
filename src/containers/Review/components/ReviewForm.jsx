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

class ReviewForm extends PureComponent {
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
          </form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let parentId = state.review.item._id ? state.review.item._id : 0;
  return {
    initialValues: {
      parent_review: parentId
    }
  }
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'ReviewCreate',
  enableReinitialize : true // this is needed!!
})(ReviewForm)))
