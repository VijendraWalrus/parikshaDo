
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component';
import { DataGrid } from '@mui/x-data-grid';


function QuestionView() {

    const [allQuesData, setallQuesData] = useState([]);



    useEffect(() => {
        axios
            .get('http://localhost:4000/allQuestions')
            .then((response) => {
                console.log(response.data);
                setallQuesData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])


    const columns = [
        {
          field: 'select_topic',
          headerName: 'Topic',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'question_type',
          headerName: 'Question Type',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'maximum_score',
          headerName: 'Maximum Score',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'question_description',
          headerName: 'Question Description',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'comment',
          headerName: 'Comment',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'solution',
          headerName: 'Solution',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'shuffle',
          headerName: 'Shuffle',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'option1',
          headerName: 'Option 1',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'option2',
          headerName: 'Option 2',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'option3',
          headerName: 'Option 3',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'option4',
          headerName: 'Option 4',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'correct_option',
          headerName: 'Correct Option',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
        {
          field: 'language',
          headerName: 'Language',
          renderCell: (params) => (
            <div title={params.value}>{params.value}</div>
          ),
        },
      ];
      
      
    // const columns = [
    //     {
    //         name: Topic,
    //         selector: row => row.select_topic,
    //     }, {
    //         name: Question Type,
    //         selector: row => row.question_type,
    //     }, {
    //         name: Maximum Score,
    //         selector: row => row.maximum_score,
    //     }, {
    //         name: <h3 data-tooltip="Language">Question Description,
    //         selector: row => row.question_description,
    //         tooltip: 'Topic Column Tooltip',
    //     }, {
    //         name: Comment,
    //         selector: row => row.comment,
    //     }, {
    //         name: Solution,
    //         selector: row => row.solution,
    //     }, {
    //         name: shuffle,
    //         selector: row => row.shuffle,
    //     }, {
    //         name: option1,
    //         selector: row => row.option1,
    //     }, {
    //         name: option2 ,
    //         selector: row => row.option2,
    //     }, {
    //         name: option3 ,
    //         selector: row => row.option3,
    //     }, {
    //         name: option4 ,
    //         selector: row => row.option4,
    //     }, {
    //         name: correct_option,
    //         selector: row => row.correct_option,
    //     }, {
    //         name: language,
    //         selector: row => row.language,
    //     }
    // ];
   
    return (
        <>
         <h2 className="head_text" >All Questions</h2>
           
           {/* <div className="data_table_question"> */}
           <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={allQuesData}
        columns={columns}
        pageSize={10}
      />
    </div>
                {/* </div> */}
              
        </>
    );
}
export default QuestionView;
