import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {
  Card
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainCard: {

  },
  question: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  selectionCard: {
    width: 500,
    padding: 10,
    marginBottom: 12,
  },
  cardColumns: {
    display: 'flex',
    flexDirection: 'row',
  },
  selectionHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 'auto',
    marginTop: 'auto',
    width: 40,
    height: 40,
  },
  selectionMain: {

  },
}));

const Step_0 = props => {
  const classes = useStyles();

  return(
    <div className={classes.mainCard}>
      <Typography className={classes.question}>
        In welcher Rolle bist du im Kampf gegen Covid19 aktiv?
      </Typography>
      <Card className={classes.selectionCard}>
        <div className={classes.cardColumns}>
          <div>
            <Typography className={classes.selectionHeader}>
              Medizinstudierender
            </Typography>
            <Typography className={classes.selectionMain}>
              Ich möchte gern in einer Einrichtung Unterstützung leisten
            </Typography>
          </div>
          <div>
            <PermIdentityIcon className={classes.icon} />
          </div>
        </div>
      </Card>
      <Card className={classes.selectionCard}>
        <Typography className={classes.selectionHeader}>
          Einrichtung
        </Typography>
        <Typography className={classes.selectionMain}>
          Ich habe Bedarf an Unterstützung durch Medizinstudierenden
        </Typography>
      </Card>
    </div>
  )
}

export default Step_0;

