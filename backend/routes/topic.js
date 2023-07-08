const client = require('../db/db.config');
const bcrypt = require('bcrypt');

async function createTopic(req,res) {
    try {
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO topic(subject_name,topic_name)
      VALUES ($1,$2)`;
      const values = [
        req.body.subject_name,
        req.body.topic_name
      ];
      await client.query(query,values);
      res.status(200).json({ message: 'Topic created successfully' });
      
    } catch (err) {
      console.error('Error creating record:', err.message);
     
    }
  }

  async function allTopic() {
    try {
        const query = 'SELECT * FROM topic';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }


  module.exports = { createTopic , allTopic};