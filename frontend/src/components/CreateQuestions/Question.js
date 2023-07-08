import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Data from "./Data";
// import Options from "./Options";

const useStyles = makeStyles(() => ({
  createclentbtn: {
    paddingRight: "30px",
    display: "flex",
    justifyContent: "flex-end",
  },
  container_fluid: {
    width: "100%",
  },
  container: {
    maxWidth: "1350px",
    margin: "auto",
  },
  clientcard: {
    padding: "30px",
    "& .MuiFormControl-root": {
      display: "flex !important",
      flexDirection: "row !important",
      flexWrap: "wrap !important",
      justifyContent: "space-between !important",
      border: "0",
      margin: "10px",
    },
    "& .MuiTextField-root": {
      width: "45%",
    },
    "& .MuiInputBase-formControl": {
      width: "100%",
    },
  },
  radio: {
    margin: "10px",
    width: "45%",
    "& .MuiTypography-root":{
      width:'100%'
    },
  },
  Options_input:{
    width: "100% !important",
  },
}));
function Question() {
  const [alltopic, setallTopic] = useState([]);
  const [formData, setFormData] = useState({
    select_topic: '',
    question_type: '',
    language: '',
    maximum_score: '',
    question_description: '',
    comment: '',
    solution: '',
    shuffle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct_option: '',
  });

  useEffect(()=>{
    axios
      .get('http://localhost:4000/allTopic')
      .then((response) => {
        console.log(response.data);
        setallTopic(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  },[])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'radio') {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };


  const submitData = async (e)=>{
    e.preventDefault();
console.log(formData)
    axios.post('http://localhost:4000/createQuestion', formData)
    .then((response) => {
        if(response.data){
            toast(response.data.message, {
                position: "top-center",
                type: "success",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false
        }else{
          console.log(response.data);
        }
       
    })
    .catch((error) => {
      console.error(error);
    });
  }


  const classes = useStyles();
  const uniqueData = [...new Map(alltopic.map(item => [item.topic_name, item])).values()];
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
          <Card className={classes.clientcard}>
          <h2 className="head_text" >Create Question</h2>
            <FormControl>
              <TextField
                id="select_topic"
                select
                label="select_topic"
                name="select_topic"
                value={formData.select_topic}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option aria-label="None" value="" />
                      {uniqueData.map((option) => (
                        <option key={option.id} value={option.topic_name}>
                          {option.topic_name} 
                        </option>
                      ))}
              </TextField>
              <TextField
                id="question_type"
                select
                label="Question type"
                name="question_type"
                value={formData.question_type}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option key="abc" value="Multiple Choice Questions">
                  Multiple Choice Questions
                </option>
                
              </TextField>
              <TextField
                id="language"
                select
                label="Language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option key="Hindi" value="Hindi">
                  Hindi
                </option>
                <option key="English" value="English">
                  English
                </option>
              </TextField>
              <TextField
                className={classes.Client_form}
                id="maximum_score"
                label="Maximum Score"
                type="Number"
                name="maximum_score"
                value={formData.maximum_score}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                multiline
                rows={4}
                className={classes.Client_form}
                value={formData.question_description}
                id="question_description"
                label="Question Description"
                name="question_description"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                multiline
                rows={4}
                className={classes.Client_form}
                value={formData.comment}
                id="comment"
                label="Comment"
                type="text"
                name="comment"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                id="solution"
                label="Solution"
                type="text"
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <div className={classes.radio}>
                <FormLabel component="legend">shuffle</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="shuffle"
                  
                  
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                    
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </div>
              <div className={classes.radio}>
                <FormLabel component="legend">Options</FormLabel>
                <RadioGroup
                  column
                  aria-label="Option"
                  name="correct_option"
                  value={formData.correct_option}
                  onChange={handleChange}
                  
                >
                  <FormControlLabel
                  
                    value="1"
                    control={<Radio />}
                    label=<TextField
                    onChange={handleChange}
                    value={formData.option1}
                    name="option1"
                      className={classes.Options_input}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  />

                  <FormControlLabel
             
                    value="2"
                    control={<Radio />}
                    label=<TextField
                      className={classes.Options_input}
                      onChange={handleChange}
                      name="option2"
                      value={formData.option2}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  />
                  <FormControlLabel
                 
                    value="3"
                    control={<Radio />}
                    label=<TextField
                    value={formData.option3}
                      className={classes.Options_input}
                      name="option3"
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  />
                  <FormControlLabel
                 
                    value="4"
                    control={<Radio />}
                    label=<TextField
                      className={classes.Options_input}
                      value={formData.option4}
                      name="option4"
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  />
                </RadioGroup>
              </div>
            </FormControl>
            <div className={classes.createclentbtn}>
              <Button onClick={submitData} variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Question;
