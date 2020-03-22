import React from 'react';
import {
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  confirmLogo: {
    width: 80,
    height: 80,
    marginBottom: 10
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  normal: {
    width: 300,
    marginTop: 20,
    fontSize: 16
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Step_4 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      <img className={classes.confirmLogo} src='/images/Confirm.svg'/>
      <Typography className={classes.bold}>
        Deine Anmeldung war erfolgreich!
      </Typography>
      <Typography className={classes.bold}>
        Herzlich Willkommen bei Match4Healthcare!
      </Typography>
      <Typography className={classes.normal}>
        Bitte merke dir deine E-Mail Adresse und dein Passwort um weiterhin Zugang zur Plattform zu haben!
      </Typography>
    </div>
  );
};

export default Step_4;