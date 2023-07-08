const client = require('../db/db.config');
const bcrypt = require('bcrypt');


async function createCandidate(data) {
    
    try {
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO candidate (name, mobile_no, username, password,candidate_image, gender, dob)
      VALUES($1,$2,$3,$4,$5,$6,$7)`;
      const values = [
        data.name,
        data.mobile_no,
        data.username,
        data.password,
        data.candidate_image,
        data.gender,
        data.dob
       
      ];
     await client.query(query,values);
      
    } catch (err) {
      console.error('Error creating record:', err.message);  
    }
  }
  async function allCandidates() {
    try {
        const query = 'SELECT * FROM candidate';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }


  module.exports = {  createCandidate,allCandidates};