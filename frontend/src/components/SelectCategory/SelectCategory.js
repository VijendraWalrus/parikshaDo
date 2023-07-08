import {
  Button,
  Card,
  FormControl,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CategoryInputData from "./Categoryinputdata";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
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
function Category() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [allCat, setAllCat] = useState([]);
  const [api, setApi] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(()=>{
    axios
      .get('http://localhost:4000/allCategory')
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
  if(categoryName ==''){
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
  formData.append('category_logo', image);
  formData.append('category_name', categoryName);
  
  console.log(image)
  console.log(categoryName)

  axios.post('http://localhost:4000/createCategory',formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  .then((response) => {
    setApi(true)
    setCategoryName('')
    setImage(null)
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
// const columns = [
//   {
//       name: 'Category',
//       selector: row => row.category_name,
//   },
//   {
//     name: 'Category Logo',
//     cell: (row) => <img className="image_cell" src={`http://localhost:4000/uploads/${row.category_logo}`} alt="Category Logo" />,
//   },
// ];
// const submitDataCsv = async (e)=>{
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append('file', file);


//   axios.post('http://localhost:4000/createQuestionCsv',formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   })
//   .then((response) => {
//     setApi(true)
//     setCategoryName('')
//     setImage(null)
//       if(response.data){
//           toast(response.data.message, {
//               position: "top-center",
//               type: "success",
//               autoClose: 2000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "light",
//               });
             
//       }else{
//         console.log(response.data);
//       }
     
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }
const columns = [
  	{
  		name: 'Category',
  		selector: row =>row.category_name,
  		sortable: true,
  		maxWidth: '50%'
  	},
  	{
  		name: 'Logo',
  		grow: 0,
  		cell: row => <img height="70px" padding='3px' width="56px" alt={row.name} src={`http://localhost:4000/uploads/${row.category_logo}`} />
  	}
  ];
  return (
    <>
      <div className={classes.container_fluid}>
      <ToastContainer/>
        <div className={classes.container}>
          <Card className={classes.clientcard}>
          <h2 className="head_text" >Create Category</h2>
            <FormControl>
              {/* return ( */}
                  <TextField
                    className={classes.Client_form}
                    onChange={(e) => setCategoryName(e.target.value)}
                    type= "text"
                    name= "category_name"
                    label= "Category Name"
                    id= "Category_Name"
                    value= {categoryName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                   <TextField
                    className={classes.Client_form}
                    onChange={(e) => setImage(e.target.files[0])}
                    type= "file"
                    name= "category_logo"
                    label= "Category logo"
                    id= "Category_Logo"
                    accept="image/*"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                    {/* <TextField
                    className={classes.Client_form}
                    onChange={handleFileChange}
                    type= "file"
                    name= "category_logo"
                    label= "Category logo"
                    id= "Category_Logo"
                    accept="image/*"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                 <Button onClick={submitDataCsv} variant="contained" color="primary">
                SubmitCsv
              </Button> */}
                {/* ); */}
         
            </FormControl>
            <div className={classes.createSubjectbtn}>
              <Button onClick={submitData} variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="data_table" >
      <DataTable
      title="All categories -"
            pagination
            columns={columns}
            data={allCat}
        />

      </div>
      


    </>
  );
}
export default Category;

// {
           
             
 //CategoryInputData.map((Data) => {
                // if (Data.type === "select") {
                //   return (
                //     <TextField
                //       id={Data.id}
                //       select
                //       label={Data.label}
                //       SelectProps={{
                //         native: true,
                //       }}
                //       helperText={Data.helptext}
                //       variant="outlined"
                //     >
                //       {Data.options.map((option) => (
                //         <option key={option.value} value={option.value}>
                //           {option.label}
                //         </option>
                //       ))}
                //     </TextField>
                //   );
                // }
              // })}