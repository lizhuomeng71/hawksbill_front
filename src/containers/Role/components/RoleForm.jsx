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


class DepartmentForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { onReadDepartmentList } = this.props;
    onReadDepartmentList();
  }

  render() {
    const {
      departmentList,
      handleSubmit,
      reset,
      submitting,
      t,
    } = this.props;


    return (
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <form className="form" onSubmit={handleSubmit}>
                <Row>
                  <Col lg="6" sm="12">
                    <Field
                      label="Name"
                      name="name"
                      component={renderInputField}
                      placeholder="Role Name"
                    />
                  </Col>
                  <Col md="6" sm="12">
                    <Field
                      name="department"
                      label="Department"
                      component={renderSelectField}
                      placeholder="Select Department"
                      options={departmentList}
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
  form: 'DepartmentCreate', // a unique identifier for this form
})(DepartmentForm));
