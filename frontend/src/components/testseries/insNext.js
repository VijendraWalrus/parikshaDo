import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import content from "./instructioncontent";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    padding: "10px",
    boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.30);",
  },
  languageselect: {
    marginBottom: "20px",
  },
  rednote: {
    color: "red",
  },
  aggrement: {
    marginBottom: "10px",
    marginTop: "10px",
  },
  ctmbtn: {
    alignSelf: "center",
    color: "white",
    background: "blue",   
    "&:hover": {
      backgroundColor: "rgba(0, 0, 255, 0.7)",
    },
  },
  alignCenter:{
    alignSelf: 'center',
  },
});

function InstNext() {
  const [selectedLanguage, setSelectedLanguage] = useState("hi"); // Default language is 'en' for English
  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    { value: "fr", label: "French" },
    // Add more language options as needed
  ];

  // Handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.languageselect}>
        <label htmlFor="language-select">Choose your default language: </label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}>
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        {content[selectedLanguage].map((data) => (
          <div>
            <div className={classes.rednote}>{data.rednote}</div>
            <FormControlLabel
              className={classes.aggrement}
              control={
                <Checkbox
                  // checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label={data.agreement}
            />
          </div>
        ))}
      </div>
      <Link className={classes.alignCenter} to="/TestSeries"><Button className={classes.ctmbtn}>Next</Button></Link>
    </div>
  );
}

export default InstNext;
