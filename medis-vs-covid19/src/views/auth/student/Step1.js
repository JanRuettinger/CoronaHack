import React from 'react';
import { Typography, TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section: { marginBottom: '50px' },
  heading: {
    fontWeight: 'bold'
  },
  field: {
    padding: '5px',
    width: 'calc(50% - 10px)'
  }
}));

const Step_1 = props => {
  const classes = useStyles();

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
        />
        <TextField
          id="lastname"
          label="Nachname"
          variant="outlined"
          className={classes.field}
        />
        <TextField
          id="mobile"
          label="Mobil"
          variant="outlined"
          className={classes.field}
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
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className={classes.field}
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
  );
};

export default Step_1;
