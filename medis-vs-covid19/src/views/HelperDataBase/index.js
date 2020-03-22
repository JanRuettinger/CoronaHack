import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import { Select, MenuItem, Checkbox, TextField, Button, Card, Typography, FormControl, InputLabel } from '@material-ui/core'
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
  },
  inputGroup: {
    display: 'flex'
  },
  inputTuple: {
    marginLeft: 30
  },
  checkerRow: {
    display: 'flex'
  }
}));

function HelperDataBase({ route }) {
  const classes = useStyles();

  const [profession, setProfession] = React.useState('');
  const [abschnitt, setAbschnitt] = React.useState('');
  const [famulatur, setFamulatur] = React.useState('');

  // setProfession(professions[0]['fieldValue']);

  // const [helpers, setHelpers] = useState([]);
  const customers = [{
    "id": 0,
    "name": "Abbie Wilson",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Anästhesie",
    "startzeit": "21.03.2020",
    "verfuegbarkeit": "10 h pro Woche",
    "verguetung": "benötigt",
    "email": "abbie@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "id": 1,
    "name": "Greta Bistin",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Chirugie",
    "startzeit": "21.04.2020",
    "verfuegbarkeit": "20 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "greta@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "id": 2,
    "name": "David Baumann",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Innere Medizin",
    "startzeit": "24.03.2020",
    "verfuegbarkeit": "30 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "david@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "id": 3,
    "name": "Rainer Willmann",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Vorklinischer Abschnitt (1. - 4. Semester)",
    "famulatur": "Innere Medizin",
    "startzeit": "24.03.2020",
    "verfuegbarkeit": "30 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "david@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "id": 4,
    "name": "Mary Heart",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Vorklinischer Abschnitt (1. - 4. Semester)",
    "famulatur": "Innere Medizin",
    "startzeit": "21.03.2020",
    "verfuegbarkeit": "10 h pro Woche",
    "verguetung": "benötigt"
  }
  ];

  const customersKlinisch = [{
    "name": "Abbie Wilson",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Anästhesie",
    "startzeit": "21.03.2020",
    "verfuegbarkeit": "10 h pro Woche",
    "verguetung": "benötigt",
    "email": "abbie@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "name": "Greta Bistin",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Chirugie",
    "startzeit": "21.04.2020",
    "verfuegbarkeit": "20 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "greta@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "name": "David Baumann",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Innere Medizin",
    "startzeit": "24.03.2020",
    "verfuegbarkeit": "30 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "david@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "name": "Dorothe Baumann",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Innere Medizin",
    "startzeit": "22.03.2020",
    "verfuegbarkeit": "10 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "Dorothe@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "name": "Gerd Müller",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Notaufnahme",
    "startzeit": "22.03.2020",
    "verfuegbarkeit": "20 h pro Woche",
    "verguetung": "benötigt",
    "email": "gerd@web.de",
    "Telefonnummer":"+4917666612312"
  }];

  const customersKlinischFamu = [{
    "name": "Greta Bistin",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Notaufnahme",
    "startzeit": "21.04.2020",
    "verfuegbarkeit": "20 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "greta@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "name": "David Baumann",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Notaufnahme",
    "startzeit": "24.03.2020",
    "verfuegbarkeit": "30 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "david@web.de",
    "Telefonnummer":"+4917666612312"
  },
  {
    "name": "Dorothe Baumann",
    "ausbildungsstand": "MedizinstudentIn",
    "vorbildungsabschnitt": "Klinischer Abschnitt (5. - 10. Semester)",
    "famulatur": "Notaufnahme",
    "startzeit": "22.03.2020",
    "verfuegbarkeit": "10 h pro Woche",
    "verguetung": "nicht benötigt",
    "email": "Dorothe@web.de",
    "Telefonnummer":"+4917666612312"
  }];

  const [activeCustomers, setActiveCustomers] = React.useState(customers);

  const changeProfession = (e) => {
    setProfession(e.target.value);
  };
  const changeAbschnitt = (e) => {
    setActiveCustomers(customersKlinisch);
    setAbschnitt(e.target.value);
  };
  const changeFamulatur = (e) => {
    setActiveCustomers(customersKlinischFamu);
    setFamulatur(e.target.value);
  };
  const changeProfCheck = (e) => {

  };

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
          <div className={classes.inputGroup}>
            <div className={classes.inputTuple}>
              <Typography className={classes.bold}>
                Gesuchte Kompetenz *
              </Typography>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Kompetenz</InputLabel>
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
              </FormControl>
            </div>
            <div className={classes.inputTuple}>
              { !(progressOptions.has(profession)) ? (
                  <div/>
                ) : (
                  <div>
                    <Typography className={classes.bold}>
                      Ausbildungsabschnitt
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Auswählen</InputLabel>
                      <Select
                        labelId="progress"
                        id="progress"
                        value={abschnitt}
                        onChange={changeAbschnitt}
                        className={classes.select}
                      >
                        {
                          progressOptions.get(profession).map(({ text, fieldValue }, i) => {
                            return(
                              <div className={classes.checkerRow}>
                                <Checkbox onChange={changeProfCheck} />
                                <MenuItem value={fieldValue}>{text}</MenuItem>
                              </div>
                            )
                          })
                        }
                      </Select>
                    </FormControl>
                  </div>
                )
              }
            </div>
            <div className={classes.inputTuple}>
              { !famulaturProfessions.has(profession) ? (
                  <div/>
                ) : (
                  <div>
                    <Typography className={classes.bold}>
                      Abgeschlossene Famulaturen
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Auswählen</InputLabel>
                      <Select
                        labelId="famulatur"
                        id="famulatur"
                        label="Alle"
                        value={famulatur}
                        onChange={changeFamulatur}
                        className={classes.select}
                      >
                        {
                          famulaturProfessions.get(profession).map(({ text, fieldValue }, i) => {
                            return(
                              <div className={classes.checkerRow}>
                                <Checkbox onChange={changeProfCheck} />
                                <MenuItem value={fieldValue}>{text}</MenuItem>
                              </div>
                            )
                          })
                        }
                      </Select>
                    </FormControl>
                  </div>
                )
              }
            </div>
          </div>
          {customers && (
            <Results
              className={classes.results}
              customers={activeCustomers}
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
