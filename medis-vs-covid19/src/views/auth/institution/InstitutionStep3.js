import React from 'react'
import {
  Typography,
  TextField,
  Divider,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { blockRenderMap } from 'src/components/RichEditor/block'

const useStyles = makeStyles(theme => ({
  section: { margin: '30px' },
  heading: {
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  devider: {
    margin: '2px 27px 11px 0'
  },
  fieldHalfWidth: {
    padding: '5px',
    width: 'calc(50% - 10px)',
    marginBottom: '10px'
  },
  fieldFullWidth: {
    padding: '5px',
    width: 'calc(100% - 20px)',
    marginBottom: '10px'
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: '80px',
    marginTop: '15px'
  },
  radioContainer: {
    marginRight: '30px'
  },
  radio: {
    display: 'block'
  }
}))

const InstitutionSignup = props => {
  const classes = useStyles()

  const {
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
    setInstitutionMobile,institutionKind, setInstitutionKind
  } = props

  const changeInstitiutionName = event => {
    setInstitutionName(event.target.value)
  }

  const changeInstitiutionLocation = event => {
    setInstitutionLocation(event.target.value)
  }

  const changeInstitutionEmail = event => {
    setInstitutionEmail(event.target.value)
  }

  const changeInstitiutionMobile = event => {
    setInstitutionMobile(event.target.value)
  }

  const handleChangeRadio = event => {
    setInstitutionKind(event.target.value)
  };

  return (
    <>
      <section className={classes.section}>
        <Typography className={classes.heading}>
          Einverständniserklärungen
        </Typography>
        <Divider className={classes.devider}/>
        <div className={classes.checkboxContainer}>
          <FormControlLabel
            control={<Checkbox />}
            label="Wir sichern zu, dass den Helfenden ein Arbeitsvertrag oder eine Ausbildungsvereinbarung und die notwendige Schutzkleidung zur Verfügung gestellt wird.*"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Ich bestätige, dass meine Angaben korrekt sind und dass ich Mitglied der angegebenen Organisation bin.*"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Hiermit akzeptiere ich die Datenschutzbedingungen.*"
          />
        </div>
      </section>
    </>
  )
}

export default InstitutionSignup
