import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "./image/profile.jpg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  customButton: {
    margin: "5px",
    width: "50px",
    height: "30px",
  },
  palateNum: {
    margin: "10px",
    display: "flex",
    paddingLeft: "30px",
    // height: "200px",
    flexDirection: "column",
    maxWidth: "280px",
    height: "300px",
  },
  ctmBtn: {
    overflow: "auto",
    maxHeight: "250px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  profileRoot: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: "60px !important",
    paddingTop: "25px ",
  },
  cover: {
    width: 151,
    margin: "10px",
  },
  questionNum: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  legends: {
    display: "flex",
    flexWrap: "wrap",
  },
  legendsinside: {
    marginRight: "10px !important",
  },
  legendcolor1: {
    background:
      "linear-gradient(0deg, rgba(2,67,15,1) 0%, rgba(5,190,10,1) 100%)",
    width: "25px  !important",
    height: "25px  !important",
    marginRight: "10px !important",
    border: "1px solid black",
    borderRadius: "3px",
  },
  legendcolor2: {
    background:
      "linear-gradient(0deg, rgba(253,29,29,1) 0%, rgba(237,139,0,1) 100%)",
    width: "25px  !important",
    height: "25px  !important",
    marginRight: "10px !important",
    borderRadius: "3px",
    border: "1px solid black",
    borderRadius: "3px",
  },
  legendcolor3: {
    background:
      "linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(183,70,252,1) 100%)",
    width: "25px  !important",
    height: "25px  !important",
    marginRight: "10px !important",
    border: "1px solid black",
    borderRadius: "3px",
  },
  legendcolor4: {
    width: "25px  !important",
    height: "25px  !important",
    marginRight: "10px !important",
    border: "1px solid black",
    borderRadius: "3px",
  },
}));

export default function MediaControlCard(props) {
  const { questions, handelClick } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.profileRoot}>
        <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Time Left : 00:00
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Candidate
            </Typography>
          </CardContent>
        </div>
      </div>
      <div className={classes.questionNum}>
        <Typography variant="subtitle1">
          You are viewing <b>React</b> section.
        </Typography>

        <div className={classes.palateNum}>
          <Typography variant="subtitle1" color="textSecondary">
            Question Palate
          </Typography>
          <div className={classes.ctmBtn}>
            {questions.map((questions, index) => (
              <div>
                {questions.section.map((data, index) => (
                  <span>
                    {data.sectionquestion.map((questions) => (
                      <button onClick={(id) => handelClick(questions.id)} id={questions.id} className={classes.customButton}>
                        {questions.quesnum}
                      </button>
                    ))}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Typography component="h5" variant="h5">
            Legend:
          </Typography>
          <div className={classes.legends}>
            <button className={classes.legendcolor1}></button>
            <Typography variant="subtitle1" className={classes.legendsinside}>
              Attended
            </Typography>
            <button className={classes.legendcolor2}></button>
            <Typography variant="subtitle1" className={classes.legendsinside}>
              Not Answered
            </Typography>
            <button className={classes.legendcolor3}></button>
            <Typography variant="subtitle1" className={classes.legendsinside}>
              Marked
            </Typography>

            <button className={classes.legendcolor4}></button>
            <Typography variant="subtitle1" className={classes.legendsinside}>
              Not Viewed
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}
