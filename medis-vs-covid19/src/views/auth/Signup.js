import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider
} from '@material-ui/core'

import {
  createStudentDocument,
  createInstitutionDocument
} from '../../utilities'
import { auth } from '../../firebase'
import Step0 from './Step0'
import StudentStep1 from './student/StudentStep1'
import StudentStep2 from './student/StudentStep2'
import StudentStep3 from './student/StudentStep3'
import StudentStep4 from './student/StudentStep4'
import IntsitutionStep1 from './institution/InstitutionStep1'
import InstitutionStep2 from './institution/InstitutionStep2'
import InstitutionStep3 from './institution/InstitutionStep3'
import { flexibleCompare } from '@fullcalendar/core'  // needed?
import { isJSDocAugmentsTag } from 'typescript' // needed?

import {initialDomainExperience} from './student/config'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    minWidth: 100,
    marginRight: theme.spacing(1)
  },
  stepperContainer: {
    padding: '0 150px'
  },
  instructions: {
    position: 'relative',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  footerButton: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    position: 'absolute',
    width: 1000,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))


function getSteps(role) {
  return role === 'helper'
    ? ['Persönliche Information', 'Über deinen Einsatz', 'Deine Qualifikation', 'Vielen Dank']
    : ['Allgemeine Informationen', 'Ansprechpartner', 'Einverständnis']
}

const CurrentStepStudent = props => {
  const { activeStep } = props

  switch (activeStep) {
    case 1:
      return <StudentStep1 {...props} />
    case 2:
      return <StudentStep2 {...props} />
    case 3:
      return <StudentStep3 {...props} />
    case 4:
      return <StudentStep4 {...props} />
    default:
      return 'Unknown step'
  }
}

const CurrentStepFacility = props => {
  const { activeStep } = props

  switch (activeStep) {
    case 1:
      return <IntsitutionStep1 {...props} />
    case 2:
      return <InstitutionStep2 {...props} />
    case 3:
      return <InstitutionStep3 {...props} />
  }
}

function getText(activeStep) {
  const nextLabels = [
    'Weiter',
    'Weiter',
    'Weiter',
    'Anmelden',
    'Weiter zur Plattform'
  ];
  return nextLabels[activeStep]
}


export default function HorizontalLinearStepper(props) {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())

  // Signup data
  const [role, setRole] = useState('helper')

  // steps
  const steps = getSteps(role)

  // Student data
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [prefLocation, setPrefLocation] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [compensation, setCompensation] = useState('')
  const [availability, setAvailability] = useState('')
  const [operationPlace, setOperationPlace] = useState({}) // "Bevorzugte Einsatzstellen"
  const [profession, setProfession] = useState('')
  const [educationalProgress, setEducationalProgress] = useState('') // "Ausbildungsabschnitt"
  const [domainExperience, setDomainExperience] = useState(initialDomainExperience)

  // Institution data
  const [institutionName, setInstitutionName] = useState('')
  const [institutionLocation, setInstitutionLocation] = useState('')
  const [institutionKind, setInstitutionKind] = useState('hospital')

  const [institutionContactSurName, setInstitutionContactSurName] = useState('')
  const [institutionContactLastName, setInstitutionContactLastName] = useState('')
  const [institutionContactMobile, setInstitutionContactMobile] = useState('')
  const [institutionContactEmail, setInstitutionContactEmail] = useState('')
  const [institutionContactCheckPassword, setInstitutionContactCheckPassword] = useState('')
  const [institutionContactPassword, setInstitutionContactPassword] = useState('')


  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    // const { email, password, displayName } = this.state;
    var email = 'example@gmail.com'
    var password = 'noidea'
    var displayName = 'MyExample'
    if (role === 'helper') {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )
        createStudentDocument(user, { displayName })
      } catch (error) {
        alert(error)
      }
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )
        createInstitutionDocument(user, { displayName })
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Anmeldeformular" />
        <Divider />
        <CardContent>
          <div className={classes.stepperContainer}>
            {activeStep === 0 ? (
              <div />
            ) : (
              <Stepper activeStep={activeStep - 1}>
                {steps.map((label, index) => {
                  const stepProps = {}
                  const labelProps = {}
                  if (isStepSkipped(index)) {
                    stepProps.completed = false
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            )}
          </div>
          <div>
            {activeStep === steps.length + 1 ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleSubmit} className={classes.button}>
                  Submit
                </Button>
              </div>
            ) : (
              <div className={classes.instructions}>
                {activeStep === 0 && <Step0 setRole={setRole} role={role} />}
                {role === 'helper' && activeStep > 0 && (
                  <CurrentStepStudent
                    {...{
                      activeStep,
                      firstname,
                      setFirstname,
                      lastname,
                      setLastname,
                      mobileNumber,
                      setMobileNumber,
                      email,
                      setEmail,
                      pwd,
                      setPwd,
                      prefLocation,
                      setPrefLocation,
                      startDate,
                      setStartDate,
                      compensation,
                      setCompensation,
                      availability,
                      setAvailability,
                      operationPlace, 
                      setOperationPlace, // "Bevorzugte Einsatzstellen"
                      profession, 
                      setProfession,
                      educationalProgress, 
                      setEducationalProgress,
                      domainExperience, 
                      setDomainExperience
                    }}
                  />
                )}

                {role === 'facility' && activeStep > 0 && (
                  <CurrentStepFacility
                    {...{
                      activeStep,
                      setInstitutionName,
                      setInstitutionLocation,
                      institutionKind,
                      setInstitutionKind,
                      setInstitutionContactSurName,
                      setInstitutionContactLastName,
                      setInstitutionContactMobile,
                      setInstitutionContactEmail,
                      setInstitutionContactPassword,
                      setInstitutionContactCheckPassword
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <div className={classes.footerButton}>
            <div className={classes.button}>
              {activeStep === 0 ? (
                <div />
              ) : (
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Zurück
                </Button>
              )}
            </div>
            <Button
              color="primary"
              variant="contained"
              onClick={handleNext}
              className={classes.button}
            >
              {getText(activeStep)}
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}
