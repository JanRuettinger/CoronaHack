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
import Step0 from './student/Step0'
import Step1 from './student/Step1'
import Step2 from './student/Step2'
import Step3 from './student/Step3'
import Step4 from './student/Step4'
import InstitutionSignup from './institution/InstitutionSignup'
import { flexibleCompare } from '@fullcalendar/core'
import { isJSDocAugmentsTag } from 'typescript'

import {defaultFamulaturOptions} from './student/config'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    minWidth: 100,
    marginRight: theme.spacing(1)
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

function getSteps() {
  return [
    'Rolle',
    'Persönliche Information',
    'Über deinen Einsatz',
    'Deine Qualifikation',
    ''
  ]
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

const CurrentStep = props => {
  const { activeStep } = props

  switch (activeStep) {
    case 0:
      return <Step0 {...props} />
    case 1:
      return <Step1 {...props} />
    case 2:
      return <Step2 {...props} />
    case 3:
      return <Step3 {...props} />
    case 4:
      return <Step4 {...props} />
    default:
      return 'Unknown step'
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const steps = getSteps()

  // Signup data
  const [role, setRole] = useState('helper')

  //Student data
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
  const [famulaturen, setFamulaturen] = useState(defaultFamulaturOptions)

  //Institution data
  const [institutionName, setInstitutionName] = useState('')
  const [institutionLocation, setInstitutionLocation] = useState('')
  const [institutionEmail, setInstitutionEmail] = useState('')
  const [institutionMobile, setInstitutionMobile] = useState('')
  const [institutionKind, setInstitutionKind] = useState('hospital')

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
          <div>
            {activeStep === steps.length - 1 ? (
              <div />
            ) : (
              <Stepper activeStep={activeStep}>
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
            {activeStep === steps.length ? (
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
                {role === 'helper' ? (
                  <CurrentStep
                    {...{
                      activeStep,
                      role,
                      setRole,
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
                      famulaturen, 
                      setFamulaturen
                    }}
                  />
                ) : (
                  <InstitutionSignup
                    {...{
                      activeStep,
                      role,
                      setRole,
                      institutionName,
                      setInstitutionName,
                      institutionLocation,
                      setInstitutionLocation,
                      institutionEmail,
                      setInstitutionEmail,
                      institutionMobile,
                      setInstitutionMobile,
                      institutionKind,
                      setInstitutionKind
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
