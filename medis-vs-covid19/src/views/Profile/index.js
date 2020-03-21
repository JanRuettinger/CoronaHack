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
import Connections from './Connections';
import Account from './Account';
import Projects from './Projects';
import Deployment from './Deployment';

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

function Profile({ match, history }) {
  const classes = useStyles();
  const { id, tab: currentTab } = match.params;
  const tabs = [
    { value: 'account', label: 'Account' },
    { value: 'deployment', label: 'Einsatz' },
    { value: 'qualification', label: 'Qualifikation' },
  ];

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  if (!currentTab) {
    return <Redirect to={`/profile/${id}/account`} />;
  }

  if (!tabs.find((tab) => tab.value === currentTab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
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
          value={currentTab}
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
          {currentTab === 'account' && <Account />}
          {currentTab === 'deployment' && <Deployment />}
          {currentTab === 'qualification' && <Projects />}
        </div>
      </Container>
    </Page>
  );
}

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Profile;
