/* eslint-disable  */
import React, { PureComponent } from 'react';
import {
  Card, CardBody, Col, Row, Button, ButtonToolbar,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'
import renderInputField from '../../../shared/components/form/InputField';
import renderSelectField from '../../../shared/components/form/SelectField';
import renderDatePickerField from '../../../shared/components/form/DatePicker';


class PersonForm extends PureComponent {
  static propTypes = {
    departmentList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    roleList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { onReadDepartmentList, onReadRoleList } = this.props;
    onReadDepartmentList();
    onReadRoleList();
  }

  handleDepartmentChange(event){
    let departmentId = event.target.value
    const { onReadRoleList } = this.props;
    onReadRoleList(departmentId);
  }

  render() {
    const {
      departmentList,
      roleList,
      handleSubmit,
      reset,
      submitting,
      onReadRoleList,
    } = this.props;


    return (
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <form className="form" onSubmit={handleSubmit}>
                <Row>
                  <Col lg="3" sm="12">
                    <Field
                      label="First Name"
                      name="first_name"
                      component={renderInputField}
                      placeholder="Person Name"
                    />
                  </Col>
                  <Col lg="3" sm="12">
                    <Field
                      label="Last Name"
                      name="last_name"
                      component={renderInputField}
                      placeholder="Person Name"
                    />
                  </Col>
                  <Col md="3" sm="12">
                    <Field
                      label="Email"
                      name="email"
                      component={renderInputField}
                      placeholder="Email"
                    />
                  </Col>
                  <Col md="3" sm="12">
                    <Field
                      name="phone"
                      label="Phone"
                      placeholder="Phone"
                      component={renderInputField}
                    />
                  </Col>
                  <Col md="6" sm="12">
                    <Field
                      name="department"
                      label="Department"
                      component={renderSelectField}
                      placeholder="Select Department"
                      options={departmentList}
                      onChange={this.handleDepartmentChange.bind(this)}
                    />
                  </Col>
                  <Col md="6" sm="12">
                    <Field
                      name="role"
                      label="Role"
                      component={renderSelectField}
                      placeholder="Select Role"
                      options={roleList}
                    />
                  </Col>
                </Row>


                <Row>
                  <Col lg="12">
                    <ButtonToolbar className="form__button-toolbar">
                      <Button color="primary" type="submit">Submit</Button>
                      &nbsp;
                      <Button color="secondary" type="button" onClick={reset}>
                            Cancel
                      </Button>
                    </ButtonToolbar>
                  </Col>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

  export default withRouter(reduxForm({
  form: 'PersonCreate', // a unique identifier for this form
})(PersonForm));
