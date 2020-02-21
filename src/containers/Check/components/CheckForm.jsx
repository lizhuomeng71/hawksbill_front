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
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  };

  componentDidMount() {

  }



  render() {
    const {
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
        <Card>
          <form className="form" onSubmit={handleSubmit}>
            <CardBody>
                <Row>
                  <Col lg="12">
                    <Field
                      label="Review Name"
                      name="name"
                      component={renderInputField}
                      placeholder="Review Name *"
                    />
                  </Col>
                  {/*
                  <Col md="12" sm="12">
                    <Field
                      label="Assign To Department"
                      name="department"
                      component={renderSelectField}
                      placeholder="Assign To"
                      options={departmentList}
                      onChange={this.handleDepartmentChange.bind(this)}
                    />
                  </Col>
                  <Col md="12" sm="12">
                    <Field
                      label="Assign To Role"
                      name="role"
                      component={renderSelectField}
                      placeholder="Assign To"
                      options={roleList}
                    />
                  </Col>
                  */}
                  <Col md="12" sm="12">
                    <Field
                      label="Assign To Person"
                      name="assigned_user"
                      component={renderSelectField}
                      placeholder="Assign To"
                      options={personList}
                    />
                  </Col>
                  <Col md="12" sm="12">
                    <Field
                      label="Following Review"
                      name="proceeding_reviews"
                      component={renderSelectField}
                      placeholder="Following Review"
                      options={reviewList}
                    />
                  </Col>
                  <Col md="6" sm="12">
                    <Field
                      name="startDate"
                      label="Start Date"
                      placeholder="Start Date *"
                      component={renderDatePickerField}
                    />
                  </Col>
                  <Col md="6" sm="12">
                    <Field
                      name="endDate"
                      label="End date"
                      placeholder="End date *"
                      component={renderDatePickerField}
                    />
                  </Col>
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
            </form>
        </Card>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      parent_task: ownProps.task._id
    }
  }
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'ReviewCreate',
  enableReinitialize : true // this is needed!!
})(ReviewForm)))
