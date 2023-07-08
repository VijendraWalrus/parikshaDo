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
    "& .MuiPopover-paper ": {
      top: '136px ',
  },
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
   
  },
}));

function SubCategory() {
  const [categoryName, setCategoryName] = useState([]);
  const [allsubData, setallsubData] = useState([]);
  const [categoryName1, setCategoryName1] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [image, setImage] = useState(null);
  const [api, setApi] = useState(false);
  const classes = useStyles();


useEffect(()=>{
  axios
    .get('http://localhost:4000/allCategory')
    .then((response) => {
      console.log(response.data);
      setCategoryName(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
},[])
useEffect(()=>{
  axios
    .get('http://localhost:4000/allSubCategory')
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
    if( image == '' || categoryName1 ==''|| subCategoryName ==''){
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

  formData.append('sub_category_logo',image);
  formData.append('category_name',categoryName1);
  formData.append('sub_category_name',subCategoryName);

    
    console.log(image)
    console.log(categoryName1)
    console.log(subCategoryName)
  
    axios.post('http://localhost:4000/createSubCategory',formData, {
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
  
  const uniqueData = [...new Map(categoryName.map(item => [item.category_name, item])).values()];
  const columns = [
    {
        name: <h3>Category</h3>,
        selector: row => row.category_name,
    },
    {
      name: <h3>Sub Category</h3>,
      selector: row => row.sub_category_name,
  },
    {
        name: <h3>Logo</h3>,
        grow: 0,
        cell: row => <img height="70px" padding='3px' width="56px" alt={row.sub_category_name} src={`http://localhost:4000/uploads/${row.sub_category_logo}`} />
    }
  ];
  
  return (
    <>
      <div className={classes.container_fluid}>
        <div className={classes.container}>
        <ToastContainer/>
          <Card className={classes.clientcard}>
          <h2 className="head_text" >Create Sub Category</h2>
            <FormControl>
                   <TextField
                   select
                   type='select'
                   name='category_name'
                   label='Select Category'
                   id='Select_Category'
                   SelectProps={{ native: true }}
                   value={categoryName1}
                   variant="outlined"
                   onChange={(e)=>{ setCategoryName1(e.target.value) }}
                    >
                      <option aria-label="None" value="" />
                      {uniqueData.map((option) => (
                        <option key={option.id} value={option.category_name}>
                          {option.category_name} 
                        </option>
                      ))}
                    </TextField>
                
                  <TextField
                    className={classes.Client_form}
                    type='text'
                    name='sub_category_name'
                    label='Sub Category'
                    id='Sub_Category'
                    onChange={(e)=>{ setSubCategoryName(e.target.value) }}

                    value={subCategoryName}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                   <TextField
                    className={classes.Client_form}
                    type='file'
                    name='sub_category_logo'
                    label='Sub Category Logo'
                    id='Sub_Category_Logo'
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
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
      title="All Subcategory data :"
            pagination
            columns={columns}
            data={allsubData}
        />
    </>
  );
}
export default SubCategory;

