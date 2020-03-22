import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Divider,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  section: { marginBottom: '50px' },
  heading: {
    fontWeight: 'bold'
  },
  field: {
    padding: '5px',
    width: 'calc(50% - 10px)'
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '150px' // quick and dirty way to hold 3 checkboxes per column
  }
}))

const Step_2 = props => {
  const classes = useStyles()

  const {
    setPrefLocation,
    setStartDate,
    setAvailability,
    setCompensation,
    setOperationPlace,
    operationPlace,
    startDate
  } = props

  const changeLocation = event => {
    setPrefLocation(event.target.value)
  }

  const changeStartDate = event => {
    setStartDate(event.target.value)
  }

  const changeAvailability = event => {
    setAvailability(event.target.value)
  }

  const changeCompensation = event => {
    setCompensation(event.target.value)
  }

  const changeOperationPlace = event => {
    setOperationPlace({
      ...operationPlace,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <div>
      <section className={classes.section}>
        <div>
          <TextField
            id="location"
            label="Bevorzugter Einsatzort"
            variant="outlined"
            className={classes.field}
            onChange={changeLocation}
          />
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={startDate}
            onChange={changeStartDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="point-in-time"
          label="Zeitpunkt"
          variant="outlined"
          className={classes.field}
          onChange={changeStartDate}
        />
        <TextField
          id="availability"
          label="Zeitliche Verfügbarkeit"
          variant="outlined"
          className={classes.field}
          onChange={changeAvailability}
        />
        <div>
          <TextField
            id="compensation"
            label="Vergütung"
            variant="outlined"
            className={classes.field}
            onChange={changeCompensation}
          />
        </div>
      </section>
      <section className={classes.section}>
        <Typography className={classes.heading}>
          Bevorzugte Einsatzstellen
        </Typography>
        <Divider />
        <div className={classes.checkboxContainer}>
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Krankenhaus"
          />
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Pflegedienst / Pflegeheim"
          />
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Ich helfe dort, wo ich gebraucht werde"
          />
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Arztpraxis"
          />
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Apotheke"
          />
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Rettungsdienst"
          />
          <FormControlLabel
            control={<Checkbox onChange={changeOperationPlace} />}
            label="Gesundheitsamt / Versorgungsinstitution"
          />
        </div>
      </section>
    </div>
  )
}

export default Step_2
