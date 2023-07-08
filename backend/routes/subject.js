const client = require('../db/db.config');
const bcrypt = require('bcrypt');

async function createSubject(req,res) {
    console.log(req.body.subject_name)
    try {
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO subject(subject_name,subject_code,subject_duration)
      VALUES ($1,$2,$3)`;
      const values = [
        req.body.subject_name,
        req.body.subject_code,
        req.body.subject_duration
      ];
      await client.query(query,values);
      res.status(200).json({ message: 'Subject created successfully' });
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