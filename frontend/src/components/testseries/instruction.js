import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ContentLanguage from "./ins";
import image from "./image/profile.jpg";  
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  container: {
    display: " flex",
    "& .MuiAppBar-colorPrimary": {
      color: "#828282",
      backgroundColor: "#bce8f3",
    },
    "& .MuiTypography-body1": {
      fontSize: "1.3rem",
      fontWeight: "550",
      letterSpacing: "0.0938em",
    },
  },
  formcont: {
    display: " flex",
    justifyContent: "flex-end",
    marginRight: "20px",
    "& .MuiInputLabel-formControl": {
      left: "-80px",
      top: "25px",
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0, 0) scale(1)',
      transformOrigin: 'center left',
  },
  '& .MuiInputLabel-animated ':{
    transition: 'none',
}
  },
  examsec:{
    borderRight: 'ridge',
    display: 'flex',
    flexDirection: 'column',
  },
  profsec:{
    padding: '25px',
    '& img':{
      borderRadius: '25%',
      border : 'groove',
    },    
  },
  cusbtn:{
    backgroundColor:'#bce8f3',
    color:'#828282',
    alignSelf: 'center',
    marginRight: '25px',
    
  },
  alignCenter:{
    alignSelf: 'center',
  },
}));
function InstructionMain() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.container}>
       <div className={classes.examsec}>
       <AppBar position="static">
          <Toolbar variant="dense">
            <Typography>Instructions</Typography>
          </Toolbar>
        </AppBar>
      <ContentLanguage/>
      <Link className={classes.alignCenter} to="/instNext"><Button className={classes.cusbtn}>Next</Button></Link>
       </div>
       <div className={classes.profsec}>
       <img src={image} alt="Logo" />
       <h1>Student Name</h1>
       </div>
    </div>      
    </>
  );
}
export default InstructionMain;
