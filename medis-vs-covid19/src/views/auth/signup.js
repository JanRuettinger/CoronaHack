import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider
} from '@material-ui/core';

import Step0 from './student/Step0'
import Step1 from './student/Step1'
import Step2 from './student/Step2'
import Step3 from './student/Step3'
import { flexibleCompare } from '@fullcalendar/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    width: 100,
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footerButton: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    position: 'absolute',
    width: 1000,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
}));

function getSteps() {
  return ['Rolle', 'Persönliche Information', 'Über deinen Einsatz', 'Deine Qualifikation'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step0/>;
    case 1:
      return <Step1/>;
    case 2:
      return <Step2/>;
    case 3:
      return <Step3/>;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Anmeldeformular" />
        <Divider />
        <CardContent>
          <div>
            {activeStep === 0 ? (
              <div/>
            ) : (
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            )}
          </div>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              </div>
            )}
          </div>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <div className={classes.footerButton}>
            <div className={classes.button}>
              {activeStep === 0 ? (
                <div/>
              ) : (
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Zurück
                </Button>
              )
              }
            </div>
            <Button
              color="primary"
              variant="contained"
              onClick={handleNext}
              className={classes.button}
            >
              Weiter
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
