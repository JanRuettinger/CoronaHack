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
import FormHelperText from '@material-ui/core/FormHelperText'

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
    width: 'calc(50% - 10px)'
  },
  formControlSelect: {
    display: 'none'
  },
  anmerkungen: {
    width: '100%',
  },
}));

const Step_3 = (props) => {
  
  const {
    setProfession,
    setEducationalProgress,
    profession,
    educationalProgress   
  } = props

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

  const changeEducationalProgress = (event) => {
    setEducationalProgress(event.target.value)
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
            className={classes.field}
          >
            {professions.map(({text, fieldValue}, i) => {
                return(
                <MenuItem value={fieldValue}>{text}</MenuItem>
                )
            })}
          </Select> 
        </FormControl>
        {
          profession && profession != 'sonstige' ? (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="profession-select-label">Fortschritt</InputLabel>
            <Select
              id="educationalProgress"
              value={educationalProgress}
              onChange={changeEducationalProgress}
              className={classes.field}
            > 
              {progressOptions.get(profession).map(({text, fieldValue}) => (<MenuItem value={fieldValue}>{text}</MenuItem>))}
            </Select>
          </FormControl>
          ) : (<p></p>)
        }
        {profession === 'sonstige' ? (
            <><TextField
            id="profession"
            label="Ausbildung"
            variant="outlined"
            className={classes.field}
            onChange={changeProfession}
          />
          <TextField
            id="educationalProgress"
            label="Ausbildungsfortschritt (z.B. 1. Jahr)"
            variant="outlined"
            className={classes.field}
            onChange={changeEducationalProgress}
          /></>
          ) : <p></p>}
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