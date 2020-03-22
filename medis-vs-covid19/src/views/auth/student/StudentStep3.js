import React, { useState } from 'react';
import {
  Typography, TextField, Divider, Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';

import {professions, progressOptions} from './config'

const useStyles = makeStyles((theme) => ({
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
  },
  formControlSelect: {
    display: 'none'
  },
  anmerkungen: {
    width: '100%',
  },
}));

const Step_3 = (props) => {
  const [profession, setProfession] = useState('')
  const [educationalProgress, setEducationalProgress] = useState('') // "Ausbildungsabschnitt"
  const classes = useStyles();

  const [state, setState] = React.useState({
    ana: false,
    inn: false,
    not: false,
    chi: false,
    int: false
  });

  const { ana, inn, not, chi, int } = state;

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChangeRadio = () => {};

  const changeProfession = event => {
    setProfession(event.target.value)
  }

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
          >
            {professions.map(({text, fieldValue}) => {
                return(
                <MenuItem value={fieldValue}>{text}</MenuItem>
                )
            })}
          </Select> 
        </FormControl>
        <FormControl className={classes.formControlSelect}>
          <Select
            id="eductionalregion"
            value="Ausbildungsabschnitt"
            variant="outlined"
            className={classes.field}
          >
            {profession === 'sonstige' ? (<div>TODO Eingabefeld für profession</div>
            ) : (
              progressOptions.get(profession).map(({text, fieldValue}) => (<MenuItem value={fieldValue}>{text}</MenuItem>))
            )}
            <MenuItem value={1}>Vorklinischer Abschnitt (1. - 4. Semester)</MenuItem>
            <MenuItem value={2}>5. - 8. Semester</MenuItem>
            <MenuItem value={3}>> 8. Semester</MenuItem>
          </Select>
        </FormControl>
      </section>
      <section className={classes.section}>
        <Typography className={classes.heading}>Welche Famulaturen hast du bereits abgeschlossen? (Mehrfachauswahl möglich)</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={ana} onChange={handleChange} name="ana" />}
              label="Anasthäsie"
            />
            <FormControlLabel
              control={<Checkbox checked={inn} onChange={handleChange} name="inn" />}
              label="Innere Medizin"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={not} onChange={handleChange} name="not" />}
              label="Notaufnahme"
            />
            <FormControlLabel
              control={<Checkbox checked={chi} onChange={handleChange} name="chi" />}
              label="Chirurgie"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={int} onChange={handleChange} name="int" />}
              label="Intensivmedizin"
            />
          </FormGroup>
        </FormControl>

      </section>
      <section className={classes.section}>
        <Typography className={classes.heading}>Anerkennung für Studiumsäquivalente</Typography>
        <FormControl component="fieldset">
          <RadioGroup aria-label="certificate" name="certificate" value={'noCerti'} onChange={handleChangeRadio}>
            <FormControlLabel value="certi" control={<Radio />} label="Eine Anerkennung als Teil eines Studienabschnitts (Pflegepraktikum/Famulatur) ist wichtig" />
            <FormControlLabel value="noCerti" control={<Radio />} label="Ich helfe auch ohne Anerkennung bzw. benötige diese nicht" />
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
        variant="outlined"/>
      </section>
    </div>
  );
};

export default Step_3;