import { makeStyles } from "@material-ui/core";
import React from "react";
import SideSection from "./SideSection";
import ProfilMain from "./profile";
import testData from "./dommydata";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: 'flex-start',
  },
}));
function TestSeriesMain() {

  const handelClick = (id) => {
    
  };
  
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <SideSection testData={testData}/>
        <ProfilMain className={classes.profile} handelClick={handelClick} testData={testData}/>
      </div>
    </>
  );
}
export default TestSeriesMain;
