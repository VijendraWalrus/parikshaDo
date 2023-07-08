import { makeStyles } from "@material-ui/core";
import React from "react";
import TestHeader from "./testhead";
import SimpleTabs from "./dommy";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  profile: {},
}));
function SideSection(props) {
  const { testData } = props;
  const classes = useStyles();
  return (
    
        <div className={classes.container}>
        <TestHeader testData={testData}/>
        <SimpleTabs testData={testData}/>
        </div>
   
  );
}
export default SideSection;
