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

import {professions, progressOptions, famulaturProfessions} from './config'

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
    width: 'calc(50% - 10px)'
  },
  formControlSelect: {
    display: 'none'
  },
  anmerkungen: {
    width: '100%',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '150px' // quick and dirty way to hold 3 checkboxes per column
  }
}));

const Step_3 = (props) => {
  
  const {
    setProfession,
    setEducationalProgress,
    setFamulaturen,
    profession,
    educationalProgress,
    famulaturen   
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

  const changeFamulaturen = (event) => {
    setFamulaturen({...famulaturen, [event.target.name] : event.target.checked})
  }

  const {
    anaesthesie,
    chirugie,
    inneremedizin, 
    intensivmedizin,
    notaufnahme,
    nofamulatur,
    allgemeinmedizin,
  } = famulaturen

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
          profession ? (
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
      </section>
      {
          famulaturProfessions.get(profession) ? (
          <section className={classes.section}>
            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                Deine Famulaturen
              </Typography>
              <Divider />
              <div className={classes.checkboxContainer}>
                  <FormControlLabel
                    control={<Checkbox checked={anaesthesie} onChange={changeFamulaturen} name="anaesthesie"/>}
                    label="Anästhesie"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={chirugie} onChange={changeFamulaturen} name="chirugie"/>}
                    label="Chirugie"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={inneremedizin} onChange={changeFamulaturen} name="inneremedizin"/>}
                    label="Innere Medizin"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={notaufnahme} onChange={changeFamulaturen} name="notaufnahme"/>}
                    label="Intensivmedizin"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={allgemeinmedizin} onChange={changeFamulaturen} name="allgemeinmedizin"/>}
                    label="Allgemeinmedizin"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={nofamulatur} onChange={changeFamulaturen} name="nofamulatur"/>}
                    label="Keine Famulatur"
                  />
              </div>
            </FormControl>
          </section>
          ) : (<p></p>)
        }
      
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