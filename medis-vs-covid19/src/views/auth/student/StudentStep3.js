// #hallo

import React, { useState } from 'react'
import { Typography, TextField, Divider, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MenuItem from '@material-ui/core/MenuItem'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

import { professions, progressOptions, famulaturProfessions } from './config'

const useStyles = makeStyles(theme => ({
  section: { marginBottom: '20px' },
  heading: {
    fontWeight: 'bold'
  },
  field: {
    padding: '5px',
    width: 'calc(50% - 10px)'
  },
  formControl: {
    margin: theme.spacing(3),
    width: 'calc(50% - 10px)'
  },
  formControlSelect: {
    display: 'none'
  },
  anmerkungen: {
    width: '100%'
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '150px' // quick and dirty way to hold 3 checkboxes per column
  }
}))

const Step_3 = props => {
  const {
    setProfession,
    setEducationalProgress,
    setDomainExperience,
    profession,
    educationalProgress,
    domainExperience
  } = props

  const classes = useStyles()

  const [state, setState] = React.useState({
    ana: false,
    inn: false,
    not: false,
    chi: false,
    int: false
  })

  const { ana, inn, not, chi, int } = state

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const handleChangeRadio = () => {}

  const changeProfession = event => {
    setProfession(event.target.value)
  }

  const changeEducationalProgress = event => {
    setEducationalProgress(event.target.value)
  }

  const changeDomainExperience = event => {
    setDomainExperience({
      ...domainExperience,
      [event.target.name]: event.target.checked
    })
  }

  const {
    anaesthesie,
    chirugie,
    inneremedizin,
    intensivmedizin,
    notaufnahme,
    nofamulatur,
    allgemeinmedizin,
    pflege,
    verwaltung,
    labor,
    rettungsdienst
  } = domainExperience

  return (
    <div>
      <section className={classes.section}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="profession">Ausbildungsgrad</InputLabel>
          <Select
            labelId="profession"
            id="profession"
            value={profession}
            onChange={changeProfession}
            className={classes.field}
          >
            {professions.map(({ text, fieldValue }, i) => {
              return <MenuItem value={fieldValue}>{text}</MenuItem>
            })}
          </Select>
        </FormControl>
        {profession ? (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="profession-select-label">
              {profession != 'arzt' ? 'Fortschritt' : 'Fachbereich'}
            </InputLabel>
            <Select
              id="educationalProgress"
              value={educationalProgress}
              onChange={changeEducationalProgress}
              className={classes.field}
            >
              {progressOptions.get(profession).map(({ text, fieldValue }) => (
                <MenuItem value={fieldValue}>{text}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <p></p>
        )}
      </section>
      <section className={classes.section}>
        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            Hast du eine Vorausbildung oder praktische Berufserfahrung in einem
            der folgenden Bereiche? (Mehrfachauswahl möglich)
          </Typography>
          <div className={classes.checkboxContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={anaesthesie}
                  onChange={changeDomainExperience}
                  name="anaesthesie"
                />
              }
              label="Anästhesie"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={chirugie}
                  onChange={changeDomainExperience}
                  name="chirugie"
                />
              }
              label="Chirugie"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={inneremedizin}
                  onChange={changeDomainExperience}
                  name="inneremedizin"
                />
              }
              label="Innere Medizin"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={notaufnahme}
                  onChange={changeDomainExperience}
                  name="notaufnahme"
                />
              }
              label="Notaufnahme"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={intensivmedizin}
                  onChange={changeDomainExperience}
                  name="intensivmedizin"
                />
              }
              label="Intensivmedizin"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={allgemeinmedizin}
                  onChange={changeDomainExperience}
                  name="allgemeinmedizin"
                />
              }
              label="Allgemeinmedizin"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rettungsdienst}
                  onChange={changeDomainExperience}
                  name="rettungsdienst"
                />
              }
              label="Rettungsdienst"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={labor}
                  onChange={changeDomainExperience}
                  name="labor"
                />
              }
              label="Labor"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={verwaltung}
                  onChange={changeDomainExperience}
                  name="verwaltung"
                />
              }
              label="Verwaltung & Logistik"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={pflege}
                  onChange={changeDomainExperience}
                  name="pflege"
                />
              }
              label="Pflege"
            />
          </div>
        </FormControl>
      </section>
      <section className={classes.section}>
        <Typography className={classes.heading}>
          Anerkennung für Studiumsäquivalente
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="certificate"
            name="certificate"
            value={'noCerti'}
            onChange={handleChangeRadio}
          >
            <FormControlLabel
              value="certi"
              control={<Radio />}
              label="Eine Anerkennung als Teil eines Studienabschnitts (Pflegepraktikum/Famulatur) ist wichtig"
            />
            <FormControlLabel
              value="noCerti"
              control={<Radio />}
              label="Ich helfe auch ohne Anerkennung bzw. benötige diese nicht"
            />
          </RadioGroup>
        </FormControl>
      </section>
      <section className={classes.section}>
        <TextField
          className={classes.anmerkungen}
          id="outlined-multiline-static"
          label="Weitere Anmerkungen"
          multiline
          rows="4"
          defaultValue=""
          variant="outlined"
        />
      </section>
      <section className={classes.section}>
        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            Einverständniserklärungen
          </Typography>
          <div className={classes.checkboxContainer}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={anaesthesie}
                  onChange={changeDomainExperience}
                  name="anaesthesie"
                />
              }
              label="Ich bestätige, dass meine Angaben korrekt sind und ich der Institution meinen Ausbildungsstand nachweisen kann."
            />
            <FormControlLabel
              control={<Checkbox name="datenschutz" />}
              label="Hiermit bestätige ich die Datenschutzbestimmungen."
            />
          </div>
        </FormControl>
      </section>
    </div>
  )
}

export default Step_3
