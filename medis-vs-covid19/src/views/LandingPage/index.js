import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Toolbar, TextField, Button, Card, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

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
    background: '#eee'
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
    color: 'white'
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
    width: 200
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

function LandingPage({ route }) {
  const classes = useStyles();

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
              variant="outlined"
              className={classes.field}
            />
            <TextField
              id="password"
              label="Passwort"
              variant="outlined"
              className={classes.field}
            />
            <Button 
              variant="contained"
              className={classes.loginButton}>
              LOGIN
            </Button>
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
                  <img className={classes.logoRowImg} height="70" src="/images/logos/ImagefromiOS.png"/>
                  <img className={classes.logoRowImg} height="50" src="/images/logos/medis-vs-covid19-logo-03.svg"/>
                  <img className={classes.logoRowImg} height="60" src="/images/logos/bundesVersicherung.png"/>
                </div>
                <Typography className={classes.bold}>
                  Medizinstudierende im Kampf gegen COVID-19!
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
                <img className={classes.logoRowImg} height="40" src="/images/logos/Logo_01.png"/>
                <img className={classes.logoRowImg} height="40" src="/images/logos/hashtagLogo.jpg"/>
                <img className={classes.logoRowImg} height="40" src="/images/logos/2011-bvmd_logo-cmyk.jpg"/>
                <img className={classes.logoRowImg} height="40" src="/images/logos/bundesKammer.png"/>
              </div>
            </div>
            <div className={classes.selectionCards}>
              <RouterLink to="/auth/signup">
                <Button>
                  <Card className={classes.selectionCard}>
                    <div className={classes.cardColumns}>
                      <div>
                        <Typography className={classes.selectionHeader}>
                          Medizinstudierender
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
              <RouterLink to="/auth/signup">
                <Button>
                  <Card className={classes.selectionCard}>
                    <div className={classes.cardColumns}>
                      <div>
                        <Typography className={classes.selectionHeader}>
                          Einrichtung
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
