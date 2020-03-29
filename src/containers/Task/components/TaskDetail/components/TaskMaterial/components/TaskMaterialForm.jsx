/* eslint-disable  */
import React, { PureComponent } from 'react';
import {
  Card, CardBody,CardHeader, Col, Row, Button, ButtonToolbar,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import renderSelectField from '../../../../../../../shared/components/form/SelectField';

class TaskMaterialForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    task: PropTypes.shape({ name: PropTypes.string }).isRequired,
    materialList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  };

  render() {
    const {
      handleSubmit,
      reset,
      submitting,
      materialList,
    } = this.props;


    return (
      <form className="form" onSubmit={handleSubmit}>
        <Row>
          <Col lg="12">
          <Field
            name="equipment"
            label="Material"
            component={renderSelectField}
            placeholder="Select Material"
            options={materialList}
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
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      taskId: ownProps.task._id
    }
  }
}

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'TaskMaterialForm',
  enableReinitialize : true // this is needed!!
})(TaskMaterialForm)))
