import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import { Select, MenuItem, TextField, Button, Card, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Results from './Results';
import { Container } from '@material-ui/core';
import SearchBar from 'src/components/SearchBar';
import {professions, progressOptions, famulaturProfessions} from '../auth/student/config'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0 // IE11 fix
    }
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56
    }
  },
  mainContainer: {
    padding: 20
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 14
  },
  text: {
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 40
  },
  headerNote: {
    marginTop: 20,
    fontSize: 12,
  },
  select: {
    minWidth: 150,
    marginBottom: 30
  }
}));

function HelperDataBase({ route }) {
  const classes = useStyles();

  const [profession, setProfession] = React.useState('');

  // setProfession(professions[0]['fieldValue']);

  const changeProfession = (e) => {
    setProfession(e.target.value);
  };
 
  console.log(profession);

  const [helpers, setHelpers] = useState([]);

  return (
    <>
      <div>
        <Container maxWidth={false} classList={classes.mainContainer}>
          <Typography className={classes.headerNote}>
            DATENBANK
          </Typography>
          <Typography className={classes.header}>
            Verfügbare Helfer
          </Typography>

          <Typography className={classes.bold}>
            Gesuchte Kompetenz
          </Typography>
          <Select
            labelId="profession"
            id="profession"
            value={profession}
            onChange={changeProfession}
            className={classes.select}
          >
            {
              professions.map(({ text, fieldValue }, i) => {
                return(
                  <MenuItem value={fieldValue}>{text}</MenuItem>
                )
              })
            }
          </Select> 
          {helpers && (
            <Results
              className={classes.results}
              helpers={helpers}
            />
          )}
        </Container>
      </div>
    </>
  );
}

HelperDataBase.propTypes = {
  route: PropTypes.object
};

export default HelperDataBase;
