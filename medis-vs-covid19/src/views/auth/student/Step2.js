import React from 'react';
import {
  Typography,
  TextField,
  Divider,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const Step_2 = props => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.section}>
        <div>
          <TextField
            id="location"
            label="Bevorzugter Einsatzort"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <TextField
          id="point-in-time"
          label="Zeitpunkt"
          variant="outlined"
          className={classes.field}
        />
        <TextField
          id="availability"
          label="Zeitliche Verfügbarkeit"
          variant="outlined"
          className={classes.field}
        />
        <div>
          <TextField
            id="compensation"
            label="Vergütung"
            variant="outlined"
            className={classes.field}
          />
        </div>
      </section>
      <section className={classes.section}>
        <Typography className={classes.heading}>
          Bevorzugte Einsatzstellen
        </Typography>
        <Divider />
        <div className={classes.checkboxContainer}>
          <FormControlLabel control={<Checkbox />} label="Krankenhaus" />
          <FormControlLabel
            control={<Checkbox />}
            label="Pflegedienst / Pflegeheim"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Ich helfe dort, wo ich gebraucht werde"
          />
          <FormControlLabel control={<Checkbox />} label="Arztpraxis" />
          <FormControlLabel control={<Checkbox />} label="Apotheke" />
          <FormControlLabel control={<Checkbox />} label="Rettungsdienst" />
          <FormControlLabel
            control={<Checkbox />}
            label="Gesundheitsamt / Versorgungsinstitution"
          />
        </div>
      </section>
    </div>
  );
};

export default Step_2;
