import {
  Button,
  Card,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
      margin: '15px',
  },
  alignCenter:{
    alignSelf: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '200px',
    alignItems: 'center',
    '& .MuiButton-root':{
      background: 'blue',
      color: 'white',
    },
    '& .MuiCard-root': {
      padding: '50px 70px',
  },
    '& .MuiPaper-elevation1': {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 0px 9px 1px rgba(0,0,0,0.1), 0px 0px 1px 1px rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(0,0,0,0.1)',
  },
  }
}));
function LoginMain() {

  const classes = useStyles();
  return (
    <div className={classes.container}>
    
      <FormControl className={classes.root}>
      <Card >
      <Typography variant="h5" gutterBottom align='center'>
        Login
      </Typography>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Roll Number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />    
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Password"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockRoundedIcon />
            </InputAdornment>
          ),
        }}
      /> 
       <Link className={classes.alignCenter} to="/InstructionMain"><Button className={classes.margin}>SIgn In</Button> </Link>
      </Card> 
      </FormControl>
      </div>  

  );
}
export default LoginMain;
