import React from 'react'
import {
  Typography,
  TextField,
  Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  section: { margin: '30px' },
  heading: {
    fontWeight: 'bold',
    marginBottom: '1px'
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
  email: {
    marginRight: '50px'
  }
}))

const InstitutionStep2 = props => {
  const classes = useStyles()

  const {
    setInstitutionContactSurName,
    setInstitutionContactLastName,
    setInstitutionContactMobile,
    setInstitutionContactEmail,
    setInstitutionContactPassword,
    setInstitutionContactCheckPassword
  } = props

  // TODO: pass up values

  const changeInstitiutionSurName = event => {
    setInstitutionContactSurName(event.target.value)
  }

  const changeInstitiutionLastName = event => {
    setInstitutionContactLastName(event.target.value)
  }

  const changeInstitiutionMobile = event => {
    setInstitutionContactMobile(event.target.value)
  }

  const changeInstitiutionEmail = event => {
    setInstitutionContactEmail(event.target.value)
  }

  const changeInstitiutionPassword = event => {
    setInstitutionContactPassword(event.target.value)
  }

  const changeInstitiutionCheckPassword = event => {
    setInstitutionContactCheckPassword(event.target.value)
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <section className={classes.section}>
            <Typography className={classes.heading}>Ansprechpartner</Typography>
            <Divider className={classes.devider} />
            <TextField
              id="firstName"
              label="Vorname"
              variant="outlined"
              className={classes.fieldHalfWidth}
              onChange={changeInstitiutionSurName}
            />
            <TextField
              id="lastName"
              label="Nachname"
              variant="outlined"
              className={classes.fieldHalfWidth}
              onChange={changeInstitiutionLastName}
            />
            <TextField
              id="mobile"
              label="Mobil"
              variant="outlined"
              className={classes.fieldHalfWidth}
              onChange={changeInstitiutionMobile}
            />
          </section>
          <section className={classes.section}>
            <Typography className={classes.heading}>Account</Typography>
            <Divider className={classes.devider} />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className={classes.fieldHalfWidth}
              onChange={changeInstitiutionEmail}
              style={{ marginRight: '50px' }}
            />
            <TextField
              id="pwd"
              label="Password"
              type="password"
              variant="outlined"
              className={classes.fieldHalfWidth}
              onChange={changeInstitiutionPassword}
            />
            <TextField
              id="confirmPwd"
              label="Verify Password"
              type="password"
              variant="outlined"
              className={classes.fieldHalfWidth}
              onChange={changeInstitiutionCheckPassword}
            />
          </section>
        </div>
      </div>
    </>
  )
}

export default InstitutionStep2
