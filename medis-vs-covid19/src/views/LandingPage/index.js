import React, { Suspense, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Toolbar, TextField, Button, Card, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { auth } from '../../firebase';
import AlertMessage from "./AlertMessage";

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
  field: {
    transform: 'scale(0.8)',
    padding: 2,
    fontSize: 18
  },
  root: {
    background: '#c8cacc'
  },
  buttonbar: {
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
    height: 45,
  },
  loginButton: {
    verticalAlign: 'top',
    height: 45,
    background: '#ED1171',
    color: 'white',
    '&:hover': {
      background: '#ED1171',
    }
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  contentMain: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    padding: 20,
    width: 1400
  },
  card: {
    padding: 20,
    width: 1000,
    marginTop: 20,
    marginBottom: 20,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12
  },
  selectionCards: {
    padding: 20,
  },
  selectionCard: {
    background: '#ED1171',
    width: 300,
    padding: 10,
    color: 'white',
    marginBottom: 12
  },
  cardColumns: {
    display: 'flex',
    flexDirection: 'row'
  },
  selectionHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 4,
    color: 'white',
    textAlignVertical: 'center'
  },
  selectionMain: {
    color: 'white',
    fontSize: 12,
    width: 225
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 8
  },
  iconDiv: {
    marginLeft: 'auto',
    position: 'relative',
    verticalAlign: 'middle'
  },
  logoRow: {
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center'
  },
  supporterRow: {
    display: 'flex',
    marginTop: 5,
    alignItems: 'center'
  },
  logoRowImg: {
    marginRight: 20
  },
  overview: {
    width: '100%',
    marginTop: -58
  }
}));

function LandingPage({ route, history }) {
  const classes = useStyles();

  const [status, setStatusBase] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeEmail = event => {
    setEmail(event.target.value)
  }

  const changePassword = event => {
    setPassword(event.target.value)
  }

  const handleLogin = async event => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
      setStatusBase({ msg: "Credentials verified.", key: Math.random() });
      history.push("/settings");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle Errors here.
      setStatusBase({ msg: "Your login credentials could not be verified, please try again.", key: Math.random() });
    });
  };

  return (
    <>
      <AppBar className={classes.root} color="primary">
        <Toolbar>
          <RouterLink to="/">
            <img alt="Logo" src="/images/logos/logo--match4healthcare.svg" />
          </RouterLink>
          <div className={classes.buttonbar}>
            <TextField
              id="email"
              label="E-Mail Adresse"
              type="email"
              onChange={changeEmail}
              variant="outlined"
              className={classes.field}
            />
            <TextField
              id="password"
              label="Passwort"
              type="password"
              onChange={changePassword}
              variant="outlined"
              className={classes.field}
            />
            <Button 
              onClick={handleLogin}
              variant="contained"
              className={classes.loginButton}>
              LOGIN
            </Button>
            {status ? <AlertMessage key={status.key} message={status.msg} /> : null}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <div className={classes.content}>
        <img className={classes.overview} src="/images/logos/overview.svg"/>
          <div className={classes.contentMain}>
            <div>
              <Card className={classes.card}>
                <div className={classes.logoRow}>
                  <img className={classes.logoRowImg} height="70" src="/images/logos/Logo_01.png"/>
                  <img className={classes.logoRowImg} height="50" src="/images/logos/medis-vs-covid19-logo-03.svg"/>
                  <img className={classes.logoRowImg} height="60" src="/images/logos/2011-bvmd_logo-cmyk.jpg"/>
                </div>
                <Typography className={classes.bold}>
                  match4healthcare - Medizinstudierende im Kampf gegen COVID-19!
                </Typography>
                <Typography className={classes.text}>
                  Angefangen hat unsere Geschichte am 16. März 2020 mit einer rasant wachsenden Facebook Gruppe. Mehr als 19.500 Studierende haben sich bis zum 20. März 2020 entschlossen, freiwillig ihre Zeit dem Dienste zur Verfügung zu stellen. Um den Bedarf der Kliniken übersichtlicher aufzulisten, haben wir diese Webseite erstellt. Wir bemühen uns, dass wir alle wichtigen Links zu Programmen von einzelnen Fachschaften und Kliniken aus den Facebook-Gruppen „Medizinstudierende vs. COVID-19“ auf dieser Seite auflisten.
                  In den letzten Tagen hat sich in Europa eine Krise aufgetan, die große Einschränkungen für viele Menschen in den nächsten Monaten bedeuten wird. Ein Notbetrieb, in dem alles Menschenmögliche getan wird, um unnötige Todesfälle zu vermeiden.
                </Typography>
                <Typography className={classes.bold}>
                  Wir sind Medizinstudenten und können helfen!
                </Typography>
                <Typography className={classes.text}>
                  Die Bedrohung durch COVID-19 stellt eine enorme Belastung für Gesundheitssysteme auf der ganzen Welt dar. Aktuell stehen wir in Europa gemeinsam vor der großen Herausforderung, die wachsende Anzahl an positiv-getesteten Fällen zu bewältigen und unser Gesundheitssystem aufrecht zu erhalten.

                  Du bist Medizinstudent/in und möchtest aktiv das Gesundheitssystem freiwillig während dieser schweren Zeit unterstützen?
                  Auf dieser Website findest du alle Krankenhäuser aufgelistet, die Bedarf an Hilfe von Medizinstudierenden haben. Wir sind bemüht diese Liste laufend auf dem neusten Stand zu halten und direkte Links zur jeweiligen Klinik einzubetten – somit kannst du dich direkt an die Klinik wenden und deine Hilfe anbieten!
                </Typography>
              </Card>
              <Typography className={classes.text}>
                Unterstützt von:  
              </Typography>
              <div className={classes.supporterRow}>
                <img className={classes.logoRowImg} height="40" src="/images/logos/ImagefromiOS.png"/>
                <img className={classes.logoRowImg} height="40" src="/images/logos/hashtagLogo.jpg"/>
                <img className={classes.logoRowImg} height="40" src="/images/logos/bundesVersicherung.png"/>
                <img className={classes.logoRowImg} height="40" src="/images/logos/bundesKammer.png"/>
              </div>
            </div>
            <div className={classes.selectionCards}>
              <RouterLink to={{
                pathname: '/auth/signup',
                state: {
                  role: 'helper'
                }
              }}>
                <Button>
                  <Card className={classes.selectionCard}>
                    <div className={classes.cardColumns}>
                      <div>
                        <Typography className={classes.selectionHeader}>
                          Als Helfer registrieren
                        </Typography>
                        <Typography className={classes.selectionMain}>
                          Ich möchte in einer Einrichtung Unterstützung leisten
                        </Typography>
                      </div>
                      <div className={classes.iconDiv}>
                        <PermIdentityIcon className={classes.icon} />
                      </div>
                    </div>
                  </Card>
                </Button>
              </RouterLink>
              <RouterLink to={{
                pathname: '/auth/signup',
                state: {
                  role: 'facility'
                }
              }}>
                <Button>
                  <Card className={classes.selectionCard}>
                    <div className={classes.cardColumns}>
                      <div>
                        <Typography className={classes.selectionHeader}>
                          Als Institution registrieren
                        </Typography>
                        <Typography className={classes.selectionMain}>
                          Ich habe Bedarf an Unterstützung
                        </Typography>
                      </div>
                      <div className={classes.iconDiv}>
                        <HomeIcon className={classes.icon} />
                      </div>
                    </div>
                  </Card>
                </Button>
              </RouterLink>
            </div>
            <Suspense fallback={<LinearProgress />}>
              {renderRoutes(route.routes)}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

LandingPage.propTypes = {
  route: PropTypes.object
};

export default LandingPage;
