const client = require('../db/db.config');
const bcrypt = require('bcrypt');

async function createSubject(req,res) {
    console.log(req.body)
    try {
      console.log(data)
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO subject(subject_name)
      VALUES ($1)`;
      const values = [
        req.body.subject_name
      ];
      await client.query(query,values);
  
      
    } catch (err) {
      console.error('Error creating record:', err.message);
     
    }
  }


  async function allSubjects() {
    try {
        const query = 'SELECT * FROM subject';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }


  module.exports = { createSubject,allSubjects};