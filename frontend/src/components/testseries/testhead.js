import { Card, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    fontSize: "37px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
    marginBottom: "10px",
  },
}));
function TestHeader(props) {
  const { testData } = props;
  const classes = useStyles();

  return (
    <>
    {testData.map((testData) => (
              <Card className={classes.container}>{testData.examname} </Card>
            ))}
      
    </>
  );
}
export default TestHeader;
