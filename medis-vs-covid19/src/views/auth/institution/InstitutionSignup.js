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
  section: { marginBottom: '50px' },
  heading: {
    fontWeight: 'bold'
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
      <div className={classes.container}>
        <div className={classes.content}>
    {/* <div> */}
      {/* <section className={classes.section}> */}
        <TextField
          id="institution-name"
          label="Name der Institution"
          variant="outlined"
          className={classes.fieldFullWidth}
          onChange={changeInstitiutionName}
        />
        <TextField
          id="location"
          label="Ort"
          variant="outlined"
          className={classes.fieldHalfWidth}
          onChange={changeInstitiutionLocation}
        />
        <div>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className={classes.fieldHalfWidth}
            onChange={changeInstitutionEmail}
            />
          <TextField
            id="mobile"
            label="Mobil"
            variant="outlined"
            className={classes.fieldHalfWidth}
            onChange={changeInstitiutionMobile}
          />
        </div>
      {/* </section> */}
      <section>
        <Typography className={classes.heading}>Art der Institution</Typography>
        <RadioGroup
          className={classes.radioGroup}
          aria-label="institution"
          name="institution"
          value={institutionKind}
          onChange={handleChangeRadio}
        >
          <div className={classes.radioContainer}>
            <FormControlLabel
              className={classes.radio}
              value="hospital"
              control={<Radio />}
              label="Krankenhaus"
            />
            <FormControlLabel
              className={classes.radio}
              value="arztpraxis"
              control={<Radio />}
              label="Arztpraxis"
            />
            <FormControlLabel
              className={classes.radio}
              value="rettungsdienst"
              control={<Radio />}
              label="Rettungsdienst"
            />
          </div>

          <div className={classes.radioContainer}>
            <FormControlLabel
              className={classes.radio}
              value="pflegedienst-pflegeheim"
              control={<Radio />}
              label="Pflegedienst / Pflegeheim"
            />
            <FormControlLabel
              className={classes.radio}
              value="apotheke"
              control={<Radio />}
              label="Apotheke"
            />
            <FormControlLabel
              className={classes.radio}
              value="gesundheitsamt-versorgungsinstitution"
              control={<Radio />}
              label="Gesundheitsamt/ Versorgungsinstitution"
            />
          </div>
        </RadioGroup>
      </section>

      <section className={classes.section}>
        <Typography className={classes.heading}>
          Einverständniserklärungen
        </Typography>
        <Divider />
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
    {/* </div> */}
      </div>
      </div>
    </>
  )
}

export default InstitutionSignup
