import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Quiz from "./quiz";
import { Card } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .PrivateTabIndicator-colorSecondary-31": {
      backgroundColor: "#f50057",
      display: "none",
    },
    '& .MuiCard-root' :{
      marginBottom: '5px',
  },
    "& .MuiTab-textColorInherit": {
      color: "white",
      background: "blue",
      margin: "5px",
      borderRadius: "10px",
    },
  },
}));

export default function SimpleTabs(props) {
  const { testData } = props;
  const classes = useStyles();
  const [currentSection, setCurrentSection] = useState(0);
  const handleChange = (event, newValue) => {
    setCurrentSection(newValue);
  };

  return (
    <>
      {testData.map((testData) => (
        <div className={classes.root}>
       
          <Card>
            <Tabs
              value={currentSection}
              onChange={handleChange}
              aria-label="simple tabs example">
              {testData.section.map((data) => (
<Tab label={data.sectionname} {...a11yProps(data.id)} />           
              ))}
            </Tabs>
          </Card>
          {testData.section.map((questions, index) => (

            <TabPanel value={currentSection} index={index}>
                <Quiz  questions={questions.sectionquestion} testData={testData} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            </TabPanel>
          ))}
        </div>
      ))}
    </>
  );
}
