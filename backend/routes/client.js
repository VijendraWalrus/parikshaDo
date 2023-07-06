const client = require('../db/db.config');
const multer = require('multer');
const path = require('path');
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


// Function to create a new record
async function createClient(req, res) {
  const clientLogo = req.file ? req.file.filename : null;
  console.log(req.body);

  try {
    // Perform your database insertion with the updated logo file name
    const query = `INSERT INTO client (name, client_code, contact_person, email, address, phone_no, country_id, state_id, city_id, pincode, client_logo, client_password, question_feedback_required)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    const values = [
      req.body.name,
      req.body.client_code,
      req.body.contact_person,
      req.body.email,
      req.body.address,
      req.body.phone_no,
      req.body.country_id,
      req.body.state_id,
      req.body.city_id,
      req.body.pincode,
      clientLogo, // Use the uploaded logo file name
      req.body.client_password,
      req.body.question_feedback_required
    ];
    await client.query(query, values);

    res.status(200).json({ message: 'Client created successfully' });
  } catch (err) {
    console.error('Error creating record:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


// Function to read all records
async function readClients() {
  try {
    
    const query = 'SELECT * FROM client';
    const result = await client.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error reading records:', err.message);
  }
}

// Function to update a record
async function updateClient(id, data) {
  try {
 
    const query = 'UPDATE your_table_name SET column1 = $1, column2 = $2, ... WHERE id = $3';
    const values = [data.column1_value, data.column2_value, id];
    await client.query(query, values);
  } catch (err) {
    console.error('Error updating record:', err.message);
  } 
}

// Function to delete a record
async function deleteClient(id) {
  try {
    // await client.connect()
    const query = 'DELETE FROM your_table_name WHERE id = $1';
    const values = [id];
    await client.query(query, values);
  } catch (err) {
    console.error('Error deleting record:', err.message);
  } 
}

module.exports = { createClient, readClients, updateClient, deleteClient };







