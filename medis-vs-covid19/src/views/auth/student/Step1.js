import React, { useState } from 'react'
import { Typography, TextField, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  section: { marginBottom: '50px' },
  heading: {
    fontWeight: 'bold'
  },
  field: {
    padding: '5px',
    width: 'calc(50% - 10px)'
  }
}))

const Step_1 = props => {
  const classes = useStyles()

  const { setFirstname, setLastname, setMobileNumber, setEmail, setPwd } = props

  const changeFirstname = event => {
    setFirstname(event.target.value)
  }

  const changeLastname = event => {
    setLastname(event.target.value)
  }

  const changeMobile = event => {
    setMobileNumber(event.target.value)
  }

  const changeEmail = event => {
    setEmail(event.target.value)
  }

  const changePassword = event => {
    setPwd(event.target.value)
  }

  return (
    <div>
      <section className={classes.section}>
        <Typography className={classes.heading}>Profil</Typography>
        <Divider />
        <TextField
          id="firstname"
          label="Vorname"
          variant="outlined"
          className={classes.field}
          onChange={changeFirstname}
        />
        <TextField
          id="lastname"
          label="Nachname"
          variant="outlined"
          className={classes.field}
          onChange={changeLastname}
        />
        <TextField
          id="mobile"
          label="Mobil"
          variant="outlined"
          className={classes.field}
          onChange={changeMobile}
        />
      </section>
      <section className={classes.section}>
        <Typography className={classes.heading}>Account</Typography>
        <Divider />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          className={classes.field}
          onChange={changeEmail}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className={classes.field}
          onChange={changePassword}
        />
        <TextField
          id="verifypassword"
          label="Verify Password"
          type="password"
          variant="outlined"
          className={classes.field}
        />
      </section>
    </div>
  )
}

export default Step_1
