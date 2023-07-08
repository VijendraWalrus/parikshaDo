import {
  Button,
  Card,
  FormControl,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ClientInputData from "./Examinputdata";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component';


const useStyles = makeStyles(() => ({
  createexambtn: {
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
    "& .MuiMenu-paper": {
      top: '216px',
  },
  },
}));
function CreateExam() {
  const [categoryName, setCategoryName] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState([]);
  const [allExam, setAllExam] = useState([]);
  const [image, setImage] = useState(null);
  const [api,setApi] = useState(false);

  const [formValues, setFormValues] = useState({
    category_name: '',
    sub_category_name: '',
    exam_name: '',
    exam_overview: '',
    numberof_exam_stage: '',
    exam_mode: '',
    exam_duration: ''
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  useEffect(() => {
    axios
      .get('http://localhost:4000/allCategory')
      .then((response) => {
        console.log(response.data);
        setCategoryName(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:4000/allSubCategory')
      .then((response) => {
        console.log(response.data);
        setSubCategoryName(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:4000/allExams')
      .then((response) => {
        console.log(response.data);
        setAllExam(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [api])

  const submitData = async (e) => {
    console.log(formValues)
    e.preventDefault();

    if (formValues.category_name == '' ||
      formValues.sub_category_name == '' ||
      formValues.exam_name == '' ||
      formValues.exam_overview == '' ||
      formValues.numberof_exam_stage == '' ||
      formValues.exam_duration == '' ||
      formValues.exam_mode == '') {
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

    const formData = new FormData();

    formData.append('category_name', formValues.category_name);
    formData.append('sub_category_name', formValues.sub_category_name);
    formData.append('exam_name', formValues.exam_name);
    formData.append('exam_overview', formValues.exam_overview);
    formData.append('numberof_exam_stage', formValues.numberof_exam_stage);
    formData.append('exam_mode', formValues.exam_mode);
    formData.append('exam_duration', formValues.exam_duration);
    formData.append('exam_logo',image);


    axios.post('http://localhost:4000/createExam', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        setApi(true)
        if (response.data) {
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
        } else {
          console.log(response.data);
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }

  const columns = [
    {
      name: 'category_name',
      selector: row => row.category_name,
    },
    {
      name: 'Sub Category',
      selector: row => row.sub_category_name,
    },
    {
      name: 'Exam Name',
      selector: row => row.exam_name,
    }, {
      name: 'Exam Overview',
      selector: row => row.exam_overview,
    }, {
      name: 'Exam_stage',
      selector: row => row.numberof_exam_stage,
    }, {
      name: 'Exam Mode',
      selector: row => row.exam_mode,
    },
    {
      name: 'Exam Duration',
      selector: row => row.exam_duration,
    },
    {
      name: 'Exam Logo',
      grow: 0,
  		cell: row => <img height="70px" padding='3px' width="56px" alt={row.exam_name} src={`http://localhost:4000/uploads/${row.exam_logo}`} />
    }
  ];
  const classes = useStyles();

  const uniqueData = [...new Map(categoryName.map(item => [item.category_name, item])).values()];
  const filteredData = subCategoryName.filter(item => item.category_name === formValues.category_name);
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
          <ToastContainer />
          <Card className={classes.clientcard}>
            <h2 className="head_text" >Create Exam</h2>
            <FormControl>

              <TextField
                select
                type="select"
                name="category_name"
                label="Select Category"
                id="category_name"
                value={formValues.category_name}
                variant="outlined"
                SelectProps={{ native: true }}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {uniqueData.map((option) => (
                  <option key={option.id} value={option.category_name}>
                    {option.category_name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                type="select"
                name="sub_category_name"
                label="Select Sub Category"
                id="sub_category_name"
                value={formValues.sub_category_name}
                variant="outlined"
                SelectProps={{ native: true }}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                {filteredData.map((option) => (
                  <option key={option.id} value={option.sub_category_name}>
                    {option.sub_category_name}
                  </option>
                ))}
              </TextField>

              <TextField
                className={classes.Client_form}
                type="text"
                name="exam_name"
                label="Exam Name"
                id="exam_name"
                value={formValues.exam_name}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                type="text"
                name="exam_overview"
                label="Exam Overview"
                id="exam_overview"
                value={formValues.exam_overview}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                type="number"
                name="numberof_exam_stage"
                label="Number of Exam Stage"
                id="numberof_exam_stage"
                value={formValues.numberof_exam_stage}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                select
                type="select"
                name="exam_mode"
                label="Exam Mode"
                id="exam_mode"
                value={formValues.exam_mode}
                variant="outlined"
                onChange={handleChange}
              >

                <option value={'online'}>online</option>
                <option value={'offline'}>offline</option>

              </TextField>
              <TextField
                className={classes.Client_form}
                type="text"
                name="exam_duration"
                label="Exam Duration"
                id="exam_duration"
                value={formValues.exam_duration}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                className={classes.Client_form}
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                name="exam_logo"
                label="Exam logo"
                id="exam_logo"
                accept="image/*"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </FormControl>

            <div className={classes.createexambtn}>
              <Button onClick={submitData} variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <DataTable
       title="All Exams -"
            pagination
            columns={columns}
            data={allExam}
        />
    </>
  );
}
export default CreateExam;
