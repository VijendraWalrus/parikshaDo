import React, { useState } from "react";
import { Card, List, ListItem, makeStyles } from "@material-ui/core";
import content from "./instructioncontent";

const useStyles = makeStyles({
  instructioncontrol: {
    margin: "20px",
   
    "& .MuiList-root": {
      margin: "auto",
      padding: "auto",
      listStyle: "decimal inside",
       },   
    "& .MuiListItem-root": {
      display: "list-item",
    },
  },
  languagecontrol: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: '20px',
  },
  contentcontrol: {
    overflow: 'auto',
    height: '500px', 
    padding:'20px',
    "& p": {
      textAlign: "center",
    },
  },
});

function ContentLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("hi"); // Default language is 'en' for English

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
    <div className={classes.instructioncontrol}>
      <div className={classes.languagecontrol}>
        <label htmlFor="language-select">View in: </label>
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
      <Card className={classes.contentcontrol}>
        {content[selectedLanguage].map((data) => (
          <div>
            <p>{data.superhead}</p>
            <h4>{data.genhead}</h4>
            
            <List>
              {console.log("bbb", data)}
              {data.gencont.map((parent) => (
                <ListItem key={parent.id}>
                  {parent.title}
                  {parent.children && parent.children.length > 0 && (
                    <List>
                      {parent.children.map((child) => (
                        <ListItem key={child.id}>{child.title} </ListItem>
                      ))}
                    </List>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default ContentLanguage;
