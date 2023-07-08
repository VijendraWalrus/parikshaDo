import {
  Button,
  Card,
  FormControl,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SubjectInputData from "./Subjectinputdata";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component';

const useStyles = makeStyles(() => ({
  createSubjectbtn: {
    paddingRight: "30px",
    display: "flex",
    justifyContent: "center",
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
      justifyContent: "Center !important",
      border: "0",
      margin: "10px",
    },
    "& .MuiTextField-root":{
      width: "45%",
    },
    "& .MuiInputBase-formControl":{
      width: "100%",
    },
    "& .MuiMenu-paper": {
      top: '216px',
  },
  },
}));
function CreateSubject() {

  const [subjectName, setSubjectName] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [subDuration, setSubDuration] = useState('');
  const [allsubData, setallsubData] = useState([]);
  const [api, setApi] = useState(false);


  useEffect(()=>{
    axios
      .get('http://localhost:4000/allSubject')
      .then((response) => {
        console.log(response.data);
        setallsubData(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  },[api])


  const submitData = async (e)=>{
    e.preventDefault();

    axios.post('http://localhost:4000/createSubject',{
    subject_name:subjectName,
    subject_code:subjectCode,
    subject_duration:subDuration
    })
    .then((response) => {
      setApi(true)
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

  const columns = [
    {
        name: 'Subject Name',
        selector: row => row.subject_name,
    },{
      name: 'Subject Code',
      selector: row => row.subject_code,
  },{
    name: 'Subject Duration',
    selector: row => row.subject_duration,
}
  ];
  const classes = useStyles();
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
          
        <ToastContainer/>
        
          <Card className={classes.clientcard}>
          <h2 className="head_text" >Create Subject</h2>
            <FormControl>
              {SubjectInputData.map((Data) => {
                if (Data.type === "select") {
                  return (
                    <TextField
                      id={Data.id}
                      select
                      label={Data.label}
                      SelectProps={{
                        native: true,
                      }}
                      helperText={Data.helptext}
                      variant="outlined"
                    >
                      {Data.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  );
                }
               
                return (
                 <>
                 <TextField
                    className={classes.Client_form}
                    type="text"
                    name="subject_name"
                    label="Subject Name"
                    id="subject_name"
                    value={subjectName}
                    onChange={(e)=>{ setSubjectName(e.target.value)}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    className={classes.Client_form}
                    type="text"
                    name="subject_code"
                    label="Subject Code"
                    id="subject_code"
                    value={subjectCode}
                    onChange={(e)=>{ setSubjectCode(e.target.value)}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    className={classes.Client_form}
                    type="text"
                    name="subject_duration"
                    label="Subject Duration"
                    id="subject_duration"
                    value={subDuration}
                    onChange={(e)=>{ setSubDuration(e.target.value)}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                 </> 
                );
              })}
            </FormControl>
            

            <div className={classes.createSubjectbtn}>
              <Button onClick={submitData} variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <DataTable 
            
            pagination
            columns={columns}
            data={allsubData}/>
    </>
  );
}
export default CreateSubject;
