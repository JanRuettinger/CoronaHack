import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Tabs,
  Tab,
  Divider,
  colors,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import Account from './Account';
import Deployment from './Deployment';
import Topbar from '../../layouts/Auth/Topbar';


const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

function Profile() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const tabs = [
    { value: 0, label: 'Account' },  
    { value: 1, label: 'Einsatz' },  
    { value: 2, label: 'Qualifikation' }, 
  ];

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Topbar />
          <Page
            className={classes.root}
            title="Profile"
          >
            <Container maxWidth="lg">

              <Typography variant="body2">
                EINSTELLUNGEN
              </Typography>
              <Typography variant="body2">
                Ändere deine Account Informationen
              </Typography> 

              <Tabs
                onChange={handleTabsChange}
                scrollButtons="auto"
                value={value}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.value}
                    label={tab.label}
                    value={tab.value}
                  />
                ))}
              </Tabs>
              <Divider className={classes.divider} />
              <div className={classes.content}>
                {value === 0 && <Account />}
                {value === 1 && <Deployment />}
              </div>
            </Container>
          </Page>
        </div>
      </div>
    </>
  );
}

export default Profile;
