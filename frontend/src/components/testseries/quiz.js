import React, { useState } from "react";
import {
  Button,
  Card,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  btncont: {
    display: "flex",
    justifyContent: "space-between",
  },
  optionans: {
    display: "block",
    background: "#f5f5f5",
    marginTop: "10px",
    padding: "10px",
  },
  container: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "Center",
    marginBottom: "4px",
  },
  questionSection: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    height: "350px",
    overflow: "auto",
  },

  custombutton: {
    margin: "20px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    background: "blue",
    color: "white",
    transition: "width 2s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 255, 0.7)",
    },
  },
  ctmbtn: {
    display: "none",
    margin: "20px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    background: "blue",
    color: "white",
    transition: "width 2s",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 255, 0.7)",
    },
  },
  activeYear: {
    backgroundColor: "black",
    color: "white",
    display: "none",
  },
  showBtn: {
    display: "block",
  },
  quizContainer: {
    width: "100%",
    display: "block",
    "& .MuiOutlinedInput-input": {
      padding: "8.5px 14px",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
    "& .PrivateNotchedOutline-legendLabelled-15": {
      width: "60px",
    },
    "& .MuiFormControl-root": {
      minWidth: "120px",
    },
    "& .PrivateNotchedOutline-legendLabelled-96 > span": {
      paddingLeft: "35px !important",
    },
  },
  questionText: {
    padding: "10px",
    paddingRight: "91px",
  },
}));

const Quiz = (props) => {
  const { testData, questions, currentSection, setCurrentSection } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAnswerOptionClickNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    const nextSection = currentSection + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextSection < testData.section.length) {
      setCurrentSection(nextSection);
      setCurrentQuestion(0);
    } else {
    }
  };

  const handleAnswerOptionClickMark = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(true);
    }
  };
  const handleSubmit = () => {
    alert("congratulations");
  };
  const handleAnswerOptionClickClr = () => {
    setSelectedOption("");
  };
  const classes = useStyles();

  return (
    <>
      <div className={classes.quizContainer}>
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <Card className={classes.container}>
              <b>Question No.{questions[currentQuestion].quesnum}</b>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Language
                </InputLabel>
                <Select
                  native
                  // value={state.age}
                  // onChange={handleChange}
                  label="language"
                  inputProps={{
                    name: "language",
                    id: "outlined-age-native-simple",
                  }}>
                  <option value={10}>English</option>
                  <option value={20}>Hindi</option>
                </Select>
              </FormControl>
            </Card>

            <Card className={classes.questionSection}>
              <div className={classes.questionText}>
                {questions[currentQuestion].question}
              </div>
              <div className="answer-section">
                {questions[currentQuestion].options.map((option) => (
                  <label key={option} className={classes.optionans}>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </Card>

            <div className={classes.btncont}>
              <div>
                <Button
                  className={classes.custombutton}
                  onClick={handleAnswerOptionClickMark}>
                  Mark for review & Next
                </Button>
                <Button
                  className={classes.custombutton}
                  onClick={handleAnswerOptionClickClr}>
                  Clear Response
                </Button>
              </div>
              <Button
                className={`${classes.custombutton} ${
                  testData.section.length === currentSection + 1 &&
                  questions.length === currentQuestion + 1 &&
                  classes.activeYear
                }`}
                onClick={handleAnswerOptionClickNext}>
                Save & Next
              </Button>
              <Button
                className={`${classes.ctmbtn} ${
                  testData.section.length === currentSection + 1 &&
                  questions.length === currentQuestion + 1 &&
                  classes.showBtn
                }`}
                onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
