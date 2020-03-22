import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  TextField,
  Switch
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  formGroup: {
    margin: theme.spacing(1),
  },
}));

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  city: '',

  isReady: false,

  oldPassword: '',
  newPassword: '',
  newPasswordRepeat: '',
};

function Account({ className, ...rest }) {
  const classes = useStyles();
  const [values, setValues] = useState({ ...initialValues });

  // useEffect(() => {

    // let mounted = true;
    // const fetchPosts = () => {
    //   axios.get('/api/users/1/posts').then((response) => {
    //     if (mounted) {
    //       setPosts(response.data.posts);
    //     }
    //   });
    // };

    // fetchPosts();

  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  const handleFieldChange = (event, field, value) => {
    event.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  return (
    <div
      className={clsx(classes.root, className)}
    >

      {/* basic info */}

          <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Account"
      />
      <CardContent className={classes.content}>
        <form>
          <div className={classes.form}>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Vorname"
                  name="firstName"
                  onChange={(event) => handleFieldChange(event, 'firstName', event.target.value)}
                  value={values.firstName}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Nachname"
                  name="lastName"
                  onChange={(event) => handleFieldChange(event, 'lastName', event.target.value)}
                  value={values.lastName}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={(event) => handleFieldChange(event, 'email', event.target.value)}
                  value={values.email}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Mobil"
                  name="phoneNumber"
                  onChange={(event) => handleFieldChange(event, 'phoneNumber', event.target.value)}
                  value={values.phoneNumber}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Wohnort"
                  name="city"
                  onChange={(event) => handleFieldChange(event, 'city', event.target.value)}
                  value={values.city}
                  variant="outlined"
                />
          </div>
          </div>
        </form>

        <Typography variant="body2">
          Möchtest du gerade angefragt werden
        </Typography> 

        <Typography variant="body2">
          Einrichtungen können dich nur anfragen, wenn du hier deine Zustimmung gibst
        </Typography> 

        <Switch
          checked={values.isReady}
          onChange={(event) => handleFieldChange(event, 'isReady', !values.isReady)}
          color="primary"
          name="isReady"
        />
        <Typography variant="body2">
          Ja, ich bin bereit
        </Typography> 



        <Button
            color="primary"
            variant="contained"
          >
            Speichern
          </Button>

      </CardContent>
    </Card>

    {/* password */}
    
<Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Passwort anpassen"
      />
      <CardContent className={classes.content}>
        <form>
          <div className={classes.form}>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Derzeitiges Passwort"
                  name="oldPassword"
                  onChange={(event) => handleFieldChange(event, 'oldPassword', event.target.value)}
                  value={values.oldPassword}
                  variant="outlined"
                  type="password"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Neues Passwort"
                  name="newPassword"
                  onChange={(event) => handleFieldChange(event, 'newPassword', event.target.value)}
                  value={values.newPassword}
                  variant="outlined"
                  type="password"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Neues Passwort wiederholen"
                  name="newPasswordRepeat"
                  onChange={(event) => handleFieldChange(event, 'newPasswordRepeat', event.target.value)}
                  value={values.newPasswordRepeat}
                  variant="outlined"
                  type="password"
                />
          </div>
          </div>
        </form>

        <Button
            color="primary"
            variant="contained"
          >
            Speichern
          </Button>

      </CardContent>
    </Card>

    </div>
  );
}

Account.propTypes = {
  className: PropTypes.string
};

export default Account;
