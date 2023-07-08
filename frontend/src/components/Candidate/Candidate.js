import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component';

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
  },
}));
function Candidate() {


  const [allCand, setallCand] = useState([]);
  const [image, setImage] = useState(null);
  const [api, setApi] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile_no: '',
    username: '',
    password: '',
    gender: '',
    dob: ''
  });


  useEffect(()=>{
    axios
      .get('http://localhost:4000/allCandidate')
      .then((response) => {
        console.log(response.data);
        setallCand(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  },[api])

  const submitData = async (e)=>{
    e.preventDefault();
    if(formData.name  == '' ||
      formData.mobile_no == '' ||
      formData.username == '' ||
      formData.password == '' ||
      formData.gender == '' ||
      formData.dob == ''
      ){
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
  const formdata = new FormData();

  
  formdata.append('name',formData.name);
  formdata.append('mobile_no',formData.mobile_no);
  formdata.append('username',formData.username);
  formdata.append('password',formData.password);
  formdata.append('candidate_image',image);
  formdata.append('gender',formData.gender);
  formdata.append('dob',formData.dob);

    axios.post('http://localhost:4000/createCandidate',formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
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

  // name: '',
  // mobile_no: '',
  // username: '',
  // password: '',
  // gender: '',
  // dob: ''
  const columns = [
  	{
      name: <h3>Name</h3>,
  		selector: row =>row.name,
  		sortable: true,
  		maxWidth: '50%'
  	},
    {
  		name: <h3>Mobile</h3>,
  		selector: row =>row.mobile_no,
  		sortable: true,
  		maxWidth: '50%'
  	},
    {
  		name: <h3>Username</h3>,
  		selector: row =>row.username,
  		sortable: true,
  		maxWidth: '50%'
  	},
    {
  		name: <h3>Password</h3>,
  		selector: row =>row.password,
  		sortable: true,
  		maxWidth: '50%'
  	},
    {
  		name: <h3>Gender</h3>,
  		selector: row =>row.gender,
  		sortable: true,
  		maxWidth: '50%'
  	},
    {
      name: <h3>DOB</h3>,
  		selector: row =>row.dob,
  		sortable: true,
  		maxWidth: '50%'
  	},
  	{
  		name: 'Image',
  		grow: 0,
  		cell: row => <img height="70px" padding='3px' width="56px" alt={row.name} src={`http://localhost:4000/uploads/${row.candidate_image}`} />
  	}
  ];

  const classes = useStyles();
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
          <Card className={classes.clientcard}>
          <h2 className="head_text" >Create Candidate</h2>
            <FormControl>
              <TextField
                className={classes.Client_form}
                id="name"
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                id="mobile_no"
                label="Mobile Number"
                type="Number"
                name="mobile_no"
                value={formData.mobile_no}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                id="username"
                label="User Name"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                id="password"
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                id="candidate_image"
                label="candidate_image"
                type="file"
                name="candidate_image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <div className={classes.radio}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="gender"
                  onChange={handleChange}
                  value={formData.gender}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </div>
              <TextField
                className={classes.Client_form}
                id="dob"
                label="Date Of Birth"
                type="Date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </FormControl>
            <div className={classes.createclentbtn}>
              <Button onClick={submitData} variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="data_table" >
      <DataTable
      title="All Candidates -"
            pagination
            columns={columns}
            data={allCand}
        />

      </div>
    </>
  );
}
export default Candidate;
