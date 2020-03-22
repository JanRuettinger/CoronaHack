import React from 'react'
import {
  Typography,
  Divider,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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


  // TODO: pass up values ??


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
            required
            label="Wir sichern zu, dass den Helfenden ein Arbeitsvertrag oder eine Ausbildungsvereinbarung und die notwendige Schutzkleidung zur Verfügung gestellt wird.*"
            />
          <FormControlLabel
            control={<Checkbox />}
            required
            label="Ich bestätige, dass meine Angaben korrekt sind und dass ich Mitglied der angegebenen Organisation bin.*"
            />
          <FormControlLabel
            control={<Checkbox />}
            required
            label="Hiermit akzeptiere ich die Datenschutzbedingungen.*"
          />
        </div>
      </section>
    </>
  )
}

export default InstitutionSignup
