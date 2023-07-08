import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Question() {
  const [value, setValue] = React.useState("usestate");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <b>Q1</b>:- React Hooks?
        </FormLabel>
        <RadioGroup
          aria-label="option"
          name="option1"
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            value="usestate"
            control={<Radio color="primary" />}
            label="usestate"
          />
          <FormControlLabel value="props" control={<Radio color="primary" />} label="props" />
          <FormControlLabel value="event" control={<Radio color="primary" />} label="event" />
        </RadioGroup>
        <div className={classes.root}>
      <Button variant="contained" color="primary">
        NEXT
      </Button>
      <Button variant="contained" color="primary">
        PREV
      </Button>
    </div>
      </FormControl>
    </>
  );
}
export default Question;
