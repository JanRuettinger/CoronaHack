import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Button,
    Radio,
    RadioGroup,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2)
    },
    form: {
        display: "grid",
        gridTemplateColumns: "1fr"
    },
    formGroup: {
        margin: theme.spacing(1)
    },
    checkBoxes: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
    },
}));

const initialValues = {
    training: "",

    anesthesia: false,
    internalMedicine: false,
    emergency: false,
    surgery: false,
    intensiveCare: false,

    recognition: false,

    furtherComments: ""
}

const Qualifications = () => {
    const classes = useStyles();
    const [values, setValues] = useState({ ...initialValues });

    const handleFieldChange = (event, field, value) => {
        event.persist();
        setValues((prevValues) => ({
            ...prevValues,
            [field]: value
        }));
    };

    return (
        <div
            className={clsx(classes.root)}
        >
            <Card>
                <CardHeader
                    title="Deine Qualifikationen"
                />
                <CardContent >
                    <form className={clsx(classes.form)}>
                        <div className={clsx(classes.formGroup)}>
                            <TextField
                                fullWidth
                                label="Ausbildungsabschnitt"
                                name="training"
                                variant="outlined"
                                value={values.training}
                                onChange={(event) => handleFieldChange(event, 'training', event.target.value)}
                            />
                        </div>
                        <div className={clsx(classes.formGroup)}>
                            <Typography variant="h5">
                                Welche Famulaturen hast du bereits abgeschlossen? (Mehrfachauswahl)
                            </Typography>
                            <div className={classes.checkBoxes}>
                                {[{ name: "anesthesia", german: "Anasthäsie" },
                                { name: "internalMedicine", german: "Innere Medizin" },
                                { name: "emergency", german: "Notaufnahme" },
                                { name: "surgery", german: "Chirurgie" },
                                { name: "intensiveCare", german: "Intensivmedizin" }].map(obj => (
                                    <FormControlLabel
                                        control={<Checkbox checked={values[obj.name]} />}
                                        label={obj.german}
                                        onChange={(event) => handleFieldChange(event, obj.name, !values[obj.name])} name={obj.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className={clsx(classes.formGroup)}>
                            <Typography variant="h5">
                                Anerkennung für Studiumsäquivalente
                            </Typography>
                            <RadioGroup aria-label="" name="recognition" onChange={(event) => handleFieldChange(event, "recognition", event.target.value)}>
                                <FormControlLabel value={true} control={<Radio />} label="Eine Anerkennung als Teil eines Studienabschnitts (Pflegepraktikum/Famulatur) ist wichtig" />
                                <FormControlLabel value={true} control={<Radio />} label="Ich helfe auch ohne Anerkennung bzw. benötige diese nicht" />
                            </RadioGroup>
                        </div>

                        <div className={clsx(classes.formGroup)}>
                            <TextField
                                fullWidth
                                label="Weitere Anmerkungen"
                                name="furtherComments"
                                variant="outlined"
                                value={values.furtherComments}
                                onChange={(event) => handleFieldChange(event, 'furtherComments', event.target.value)}
                            />
                        </div>

                    </form>

                    <Button
                        color="primary"
                        variant="contained"
                    >
                        Speichern
                    </Button>

                </CardContent>
            </Card >
        </div>
    );
}


export default Qualifications;