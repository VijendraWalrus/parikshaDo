import {
  Button,
  Card,
  FormControl,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
      flexDirection: "column !important",
      flexWrap: "wrap !important",
      alignContent: "Center !important",
      border: "0",
      margin: "10px",
    },
    "& .MuiTextField-root": {
      width: "45%",
    },
    "& .MuiInputBase-formControl": {
      width: "100%",
    },
    "& .MuiMenu-paper": {
      top: '216px',
  },
  },
}));
function CreateTopic() {
  const classes = useStyles();
  const [allSubName, setAllSubName] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [topicName, setTopicName] = useState('');
  const [allCat, setAllCat] = useState([]);
  const [api, setApi] = useState(false);

  useEffect(()=>{
    axios
      .get('http://localhost:4000/allTopic')
      .then((response) => {
        console.log(response.data);
        setAllCat(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  },[api])

  const submitData = async (e)=>{
    e.preventDefault();
    if( subjectName == '' || topicName ==''){
      toast('Please Fill all fields', {
        position: "top-center",
        type: "error",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return false
    }

    axios.post('http://localhost:4000/createTopic',{
    subject_name:subjectName,
    topic_name:topicName
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
              
        }else{
          console.log(response.data);
        }
       
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(()=>{
    axios
      .get('http://localhost:4000/allSubject')
      .then((response) => {
        console.log(response.data);
        setAllSubName(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  },[])
  
  const uniqueData = [...new Map(allSubName.map(item => [item.subject_name, item])).values()];
  const columns = [
  	{
  		name: 'Subject Name',
  		selector: row =>row.subject_name,
  		sortable: true,
  		maxWidth: '50%'
  	},
  	{
  		name: 'Topic Name',
  		selector: row =>row.topic_name,
  		sortable: true,
  		maxWidth: '50%'
  	}
  ];
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
        <ToastContainer/>
          <Card className={classes.clientcard}>
            <FormControl>
              <TextField
              select
              type='select'
                id='subject_name'
                label='Subject Name'
                name='subject_name'
                value={subjectName}
                onChange={(e)=>{setSubjectName(e.target.value)}}
                SelectProps={{
                  native: false,
                }}
                variant="outlined"
              >
                {uniqueData.map((option) => (
                        <option key={option.id} value={option.subject_name}>
                          {option.subject_name} 
                        </option>
                      ))}
              </TextField>

              <TextField
                className={classes.Client_form}
                id='Topic_Name'
                label='Topic Name'
                type='text'
                name='TopicName'
                value={topicName}
                onChange={(e)=>{setTopicName(e.target.value)}}

                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
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
      title="All Topic -"
            pagination
            columns={columns}
            data={allCat}
        />
    </>
  );
}
export default CreateTopic;
