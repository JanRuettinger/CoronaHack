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
  Switch,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';

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
  checkBoxes: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));

const initialValues = {
  deploymentLocation: '',
  perimeter: '',
  deploymentStart: new Date(),
  deploymentAvailableTime: '',
  payment: '',


  jobPharmacy: false,
  jobDoctorOffice: false,
  jobHospital: false,
  jobNursingService: false,
  jobRescueService: false,
  jobHealthDepartment: false,
};

function Deployment({ className, ...rest }) {
  const classes = useStyles();
  const [values, setValues] = useState({ ...initialValues });
  const [isCheckAll, setCheckAll] = useState(false);
  const [calendarTrigger, setCalendarTrigger] = useState(null);
  const calendarOpen = Boolean(calendarTrigger);

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

  const handleCalendarOpen = (trigger) => {
    setCalendarTrigger(trigger);
  };

  const handleCalendarChange = () => {};

  const handleCalendarAccept = (date) => {
    setValues((prevValues) => ({
      ...prevValues,
      [calendarTrigger]: date
    }));
  };

  const handleCalendarClose = () => {
    setCalendarTrigger(false);
  };

  const checkAll = () => {
    const previous = isCheckAll
    setCheckAll((prev) => !prev)
    setValues((prevValues) => ({
      ...prevValues,
      jobPharmacy: !previous,
      jobDoctorOffice: !previous,
      jobHospital: !previous,
      jobNursingService: !previous,
      jobRescueService: !previous,
      jobHealthDepartment: !previous, 
    }));
  };

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
        title="Deine Einsatzpräferenzen"
      />
      <CardContent className={classes.content}>
        <form>
          <div className={classes.form}>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Bevorzugter Einsatzort"
                  name="deploymentLocation"
                  onChange={(event) => handleFieldChange(event, 'deploymentLocation', event.target.value)}
                  value={values.deploymentLocation}
                  variant="outlined"
                />
            </div>
            <div></div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Umkreis (in km)"
                  name="perimeter"
                  onChange={(event) => handleFieldChange(event, 'perimeter', event.target.value)}
                  value={values.perimeter}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Zeitpunkt"
                  name="deploymentStart"
                  onChange={(event) => handleFieldChange(event, 'deploymentStart', event.target.value)}
                  onClick={() => handleCalendarOpen('deploymentStart')}
                  value={moment(values.deploymentStart).format('DD.MM.YYYY')}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Mobil"
                  name="deploymentAvailableTime"
                  onChange={(event) => handleFieldChange(event, 'deploymentAvailableTime', event.target.value)}
                  value={values.deploymentAvailableTime}
                  variant="outlined"
                />
            </div>
            <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="Wohnort"
                  name="payment"
                  onChange={(event) => handleFieldChange(event, 'payment', event.target.value)}
                  value={values.payment}
                  variant="outlined"
                />
          </div>
          </div>
        </form>

        <Typography variant="h5">
          Bevorzugte Einsatzstellen (Mehrfachauswahl)
        </Typography> 

        <div className={classes.checkBoxes}>
          {[{ name: "jobPharmacy", german:"Apotheke"},
            { name: "jobDoctorOffice", german:"Pflegedienst / Pflegeheim"},
            { name: "jobHospital", german:"Gesundheitsamt/ Versorgungsinstitution"},
            { name: "jobNursingService", german:"Arztpraxis"},
            { name: "jobRescueService", german:"Rettungsdienst"},
            { name: "jobHealthDepartment", german:"Krankenhaus"}].map(obj => (
            <FormControlLabel
              key={obj.name}
              control={<Checkbox checked={values[obj.name]} onChange={(event) => handleFieldChange(event, obj.name, !values[obj.name] )} name={ obj.name } />}
              label={ obj.german }
            />
          ))}
      <FormControlLabel
        control={<Checkbox checked={isCheckAll} onChange={(event) => checkAll()} name="all" />}
        label="Ich helfe dort, wo ich gebraucht werde"
      /> 
      </div>

        <Button
            color="primary"
            variant="contained"
          >
            Speichern
          </Button>

      </CardContent>
    </Card>

    
    <DatePicker
        onAccept={handleCalendarAccept}
        onChange={handleCalendarChange}
        onClose={handleCalendarClose}
        open={calendarOpen}
        style={{ display: 'none' }} // Hide the input element
        value={values.deploymentStart}
        variant="dialog"
      />

    </div>
  );
}

Deployment.propTypes = {
  className: PropTypes.string
};

export default Deployment;
