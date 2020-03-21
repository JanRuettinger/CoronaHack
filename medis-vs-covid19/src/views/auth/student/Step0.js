import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import Radio from '@material-ui/core/Radio';
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
    paddingTop: 4,
    textAlignVertical: 'center'
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 8
  },
  iconDiv: {
    marginLeft: 'auto',
    position: 'relative',
    verticalAlign: 'middle',
  },
  radio: {
    height: 30,
  },
  selectionMain: {

  },
}));

const Step_0 = props => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return(
    <div className={classes.mainCard}>
      <Typography className={classes.question}>
        In welcher Rolle bist du im Kampf gegen Covid19 aktiv?
      </Typography>
      <Card className={classes.selectionCard}>
        <div className={classes.cardColumns}>
          <div>
            <Radio
              className={classes.radio}
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
          </div>
          <div>
            <Typography className={classes.selectionHeader}>
              Medizinstudierender
            </Typography>
            <Typography className={classes.selectionMain}>
              Ich möchte gern in einer Einrichtung Unterstützung leisten
            </Typography>
          </div>
          <div className={classes.iconDiv}>
            <PermIdentityIcon className={classes.icon} />
          </div>
        </div>
      </Card>
      <Card className={classes.selectionCard}>
        <div className={classes.cardColumns}>
          <div>
            <Radio
              className={classes.radio}
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
            />
          </div>
          <div>
            <Typography className={classes.selectionHeader}>
              Einrichtung
            </Typography>
            <Typography className={classes.selectionMain}>
              Ich habe Bedarf an Unterstützung durch Medizinstudierenden
            </Typography>
            </div>
          <div className={classes.iconDiv}>
            <HomeIcon className={classes.icon} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Step_0;

