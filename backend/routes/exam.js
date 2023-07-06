const client = require('../db/db.config');
const bcrypt = require('bcrypt');

async function createExam(req, res) {
    
    try {
      console.log(req.body)
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO exam(category_name,sub_category_name,exam_name,exam_overview,numberof_exam_stage,exam_mode,exam_duration)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        req.body.category_name,
        req.body.sub_category_name,
        req.body.exam_name,
        req.body.exam_overview,
        req.body.numberof_exam_stage,
        req.body.exam_mode,
        req.body.exam_duration,
      ];
      await client.query(query,values);
  
      
    } catch (err) {
      // console.error('Error creating record:', err.message);
     
    }
  }

//   async function createSubCategory(data) {
//     try {
//       // Perform your database insertion with the updated logo file name
//       const query = `INSERT INTO sub_category(category_name,sub_category_name,sub_category_logo)
//       VALUES ($1, $2,$3)`;
//       const values = [
//         data.category_name,
//         data.sub_category_name,
//         data.logo
//       ];
//       await client.query(query, values);
  
      
//     } catch (err) {
//       console.error('Error creating record:', err.message);
     
//     }
//   }
  async function allexams() {
    try {
        const query = 'SELECT * FROM exam';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }

//   async function allCategory() {
//     try {
//         const query = 'SELECT * FROM category';
//         const result = await client.query(query);
//         return result.rows;
//       } catch (err) {
//         console.error('Error reading records:', err.message);
//       }
//   }
  module.exports = { createExam,allexams};