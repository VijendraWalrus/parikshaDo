import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ClientInputData from "./clientinputdata";

const useStyles = makeStyles(() => ({
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
    "& .MuiMenu-paper": {
      top: '216px',
  },
  },
  radio:{
    margin:'10px',
  },
}));
function CreateClient() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
          <Card className={classes.clientcard}>
            <FormControl>
              {ClientInputData.map((Data) => {
                if (Data.type === "select") {
                  return (
                    <TextField
                      id={Data.id}
                      select
                      label={Data.label}
                      SelectProps={Data.SelectProps}
                      variant="outlined"
                    >
                      {Data.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  );
                }
                if (Data.type === "radio") {
                  return (
                    <div className={classes.radio}>
                      <FormLabel component="legend">{Data.label}</FormLabel>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue=""
                      >
                        {Data.options.map((option) => (
                          <FormControlLabel
                            value={option.value}
                            control={<Radio color="primary" />}
                            label={option.label}
                            id={option.id}
                          />
                        ))}
                      </RadioGroup>
                    </div>
                  );
                }
                return (
                  <TextField
                    className={classes.Client_form}
                    id={Data.id}
                    label={Data.label}
                    type={Data.type}
                    name={Data.name}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                );
              })}
            </FormControl>
            <div className={classes.createclentbtn}>
              <Button variant="contained" color="primary">
                Primary
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default CreateClient;
