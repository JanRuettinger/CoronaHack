import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/styles';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { Container, Row, Col, Button } from 'react-bootstrap';

import HelpIcon from '@material-ui/icons/Help';
import Description from '@material-ui/icons/Description';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter, Link } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

// https://stackoverflow.com/questions/58863744/how-to-manage-a-multi-step-form-with-react

const styles = () => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: '0 auto',
  },
  instructions: {
    marginTop: '0 auto',
    marginBottom: '0 auto',
  },
});

const ColorlibConnector = withStyles({ 
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor: '#00b0ff',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#00b0ff',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#00b0ff',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#00b0ff',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <HelpIcon />,
    2: <AccountCircle />,
    3: <Description />,
  };

  return (
    <div
      className="lala"
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ['Role', 'Personal information', 'Documents'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1/>;
    case 1:
      return <Step2/>;
    case 2:
      return <Step3/>;;
    default:
      return 'Unknown step';
  }
}

class HorizontalLinearStepper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      agencyData: {}
    };
  }

  static propTypes = {
    classes: PropTypes.object,
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  logout = () => {
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Container fluid>
        <div className="lala">
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label, index) => {
              const props = {};

              return (
                <Step key={label} {...props}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              <div style={{textAlign: 'center'}}>
                <h1 style={{textAlign: 'center', paddingTop: 100, color: '#7fc297'}}>
                  Your account was successfully created!
                </h1>
                <h4 style={{textAlign: 'center', paddingTop: 50}}>
                  If we need to write something else...
                </h4>  
                <Row style={{marginTop: '40px'}} className='justify-content-center align-items-center text-center'>
                  <Col md={{span: 3}}>
                    <Button 
                      style={{borderRadius: 30, borderWidth: 0, height: 50, width: 150, backgroundColor: '#f32a19', borderColor: '#f32a19'}}
                      disabled={activeStep === 0} 
                      onClick={this.handleReset} 
                    >
                      Home
                    </Button>
                  </Col>
                  <Col md={{span: 3}}>
                    <Button
                        style={{borderRadius: 30, borderWidth: 0, height: 50, width: 150, backgroundColor: '#00b0ff'}}
                        onClick={() => console.log('Click')}
                      >
                      Login
                    </Button>
                  </Col>
                </Row>
              </div>
            ) : 
            (
              <Container style={{}}>
                <h2 className="lala">{getStepContent(activeStep)}</h2>
                <Row className='justify-content-center align-items-center text-center'>
                <Col md={{span: 3}}>
                    {
                      activeStep === steps.length - 1 ?
                      <Button
                        style={{marginTop: 10, borderRadius: 30, borderWidth: 0, height: 50, width: 150, backgroundColor: '#7fc297'}}
                        onClick={this.handleNext}
                      >
                      Send
                      </Button>
                      :
                      <Button
                        style={{marginTop: 10, backgroundColor: '#00b0ff', borderRadius: 30, borderWidth: 0, height: 50, width: 150}}
                        onClick={this.handleNext}
                      >
                      Next
                      </Button>
                    }
                  </Col>
                  <Col md={{span: 3}}>
                    <Button 
                      style={{marginTop: 10, backgroundColor: 'gold', borderRadius: 30, borderWidth: 0, height: 50, width: 150}}
                      disabled={activeStep === 0} 
                      onClick={this.handleBack} 
                    >
                      Back
                    </Button>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(HorizontalLinearStepper);