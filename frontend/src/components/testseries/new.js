import { makeStyles } from "@material-ui/core";
import React from "react";
import SimpleTabs from "./dommy";
import testData from "./dommydata";

// import testData from "./dommydata";
// import SimpleTabs from "./dommy";

const useStyles = makeStyles(() => ({
  container: {
    
  },
}));
function TestSeriesMain2() {
  
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
      <SimpleTabs testData={testData}/>  
      </div>
    </>
  );
}
export default TestSeriesMain2;
