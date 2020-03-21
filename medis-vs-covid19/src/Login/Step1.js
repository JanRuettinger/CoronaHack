import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Step1(props) {
    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

  return(
    <FormControl component="fieldset">
      <FormLabel component="legend">Ich melde mich an als</FormLabel>
      <RadioGroup aria-label="help-type" name="help-type1" value={value} onChange={handleChange}>
        <FormControlLabel value="helfender" control={<Radio />} label="Helfender" />
        <FormControlLabel value="medeinrichtung" control={<Radio />} label="Medizinische Einrichtung" />
      </RadioGroup>
    </FormControl>
  );
}