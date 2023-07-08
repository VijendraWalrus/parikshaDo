import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import names from "./name";

const useStyles = makeStyles((theme) => ({
  createclentbtn: {
    paddingRight: "30px",
    display: "flex",
    justifyContent: "flex-end",
  },
  container_fluid: {
    width: "100%",
  },
  container: {
    maxWidth: "1350px",
    margin: "auto",
  },
  clientcard: {
    padding: "30px",
    "& .MuiFormControl-root": {
      display: "flex !important",
      flexDirection: "row !important",
      flexWrap: "wrap !important",
      justifyContent: "space-between !important",
      border: "0",
      margin: "10px",
    },
    "& .MuiTextField-root": {
      width: "45%",
    },
    "& .MuiInputBase-formControl": {
      width: "100%",
    },
  },
  radio: {
    margin: "10px",
    width: "45%",
    "& .MuiTypography-root": {
      width: "100%",
    },
  },
  formControl:{
    width: "45%",
  },
  Options_input: {
    width: "100% !important",
  },
}));
function Paper() {
  const [selectMultipleSubject, SetselectMultipleSubject] = useState([]);
  const [selectMultipleTopic, SetselectMultipleTopic] = useState([]);
 

  const handleChangeMultiSubject = (event) => {
    SetselectMultipleSubject(event.target.value);
  };
  
  const handleChangeMultiTopic = (event) => {
    SetselectMultipleTopic(event.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
          <Card className={classes.clientcard}>
            <FormControl>
              <TextField
                id="Select_Exams"
                select
                label="Select Exam"
                value=""
                onChange=""
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option key="abc" value="abc">
                  abc
                </option>
                <option key="abc" value="abc">
                  123
                </option>
              </TextField>
              <TextField
                className={classes.Client_form}
                id="Number_Of_Question"
                label="Number Of Question"
                type="Number"
                name="Number_Of_Question"
                
               
                variant="outlined"
              />
              <FormControl className={classes.formControl } variant="outlined">
                <InputLabel id="demo-mutiple-checkbox-label">Select Subjects</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={selectMultipleSubject}
                  onChange={handleChangeMultiSubject}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
               
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={selectMultipleSubject.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl } variant="outlined">
                <InputLabel id="demo-mutiple-checkbox-label">Select Topics</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={selectMultipleTopic}
                  onChange={handleChangeMultiTopic}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
               
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={selectMultipleTopic.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
             
              <div className={classes.radio}>
                <FormLabel component="legend">Select Test Type</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue=""
                >
                  <FormControlLabel
                    value="Live"
                    control={<Radio />}
                    label="Live"
                  />
                  <FormControlLabel value="Practice" control={<Radio />} label="Practice" />
                  <FormControlLabel value="Mock" control={<Radio />} label="Mock" />
                </RadioGroup>
              </div>
              
              <div className={classes.radio}>
                <FormLabel component="legend">Select Length</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue=""
                >
                  <FormControlLabel
                    value="Full"
                    control={<Radio />}
                    label="Full"
                  />
                  <FormControlLabel value="Sectional" control={<Radio />} label="Sectional" />
                  <FormControlLabel value="Topic" control={<Radio />} label="Topic" />
                </RadioGroup>
              </div>

              <div className={classes.radio}>
                <FormLabel component="legend">Select Question Type</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue=""
                >
                  <FormControlLabel
                    value="Full"
                    control={<Radio />}
                    label="Full"
                  />
                  <FormControlLabel value="Random" control={<Radio />} label="Random" />
                  <FormControlLabel value="Manual" control={<Radio />} label="Manual" />
                </RadioGroup>
              </div>

            </FormControl>
            <div className={classes.createclentbtn}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Paper;
