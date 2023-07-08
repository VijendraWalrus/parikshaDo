const client = require('../db/db.config');
const bcrypt = require('bcrypt');
const xlsx = require('xlsx');

async function parseExcelFile(filePath) {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet);

  const query = `INSERT INTO question (select_topic, question_type, maximum_score, question_description, comment, solution, shuffle, option1, option2, option3, option4, correct_option, language)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
 
  const values = data.map((item) => [
    item.select_topic,
    item.question_type,
    item.maximum_score,
    item.question_description,
    item.comment,
    item.solution,
    item.shuffle,
    item.option1,
    item.option2,
    item.option3,
    item.option4,
    item.correct_option,
    item.language,
  ]);
  console.log(values)
  try {
    await client.query(query,values);
  } catch (err) {
    console.error('Error inserting records:', err.message);
  }
}

async function createQuestion(req,res) {
    console.log(req.body.subject_name)
    try {
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO question(select_topic, question_type, maximum_score, question_description, comment, solution, shuffle, option1, option2, option3, option4, correct_option,language)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`;
      const values = [
        req.body.select_topic,
        req.body.question_type,
        req.body.maximum_score,
        req.body.question_description,
        req.body.comment,
        req.body.solution,
        req.body.shuffle,
        req.body.option1,
        req.body.option2,
        req.body.option3,
        req.body.option4,
        req.body.correct_option,
        req.body.language
      ];
     await client.query(query,values);
      res.status(200).json({ message: 'Question created successfully' });
    } catch (err) {
      console.error('Error creating record:', err.message);  
    }
  }
  async function allQuestions() {
    try {
        const query = 'SELECT * FROM question';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }


  module.exports = { parseExcelFile, createQuestion,allQuestions};