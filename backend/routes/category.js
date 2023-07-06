const client = require('../db/db.config');
const bcrypt = require('bcrypt');

async function createCategory(data) {
    try {
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO category(category_name,category_logo)
      VALUES ($1, $2)`;
      const values = [
        data.category_name,
        data.logo
      ];
      await client.query(query, values);
  
      
    } catch (err) {
      console.error('Error creating record:', err.message);
     
    }
  }

  async function createSubCategory(data) {
    try {
      // Perform your database insertion with the updated logo file name
      const query = `INSERT INTO sub_category(category_name,sub_category_name,sub_category_logo)
      VALUES ($1, $2,$3)`;
      const values = [
        data.category_name,
        data.sub_category_name,
        data.logo
      ];
      await client.query(query, values);
  
      
    } catch (err) {
      console.error('Error creating record:', err.message);
     
    }
  }
  async function allSubCategory() {
    try {
        const query = 'SELECT * FROM sub_category';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }

  async function allCategory() {
    try {
        const query = 'SELECT * FROM category';
        const result = await client.query(query);
        return result.rows;
      } catch (err) {
        console.error('Error reading records:', err.message);
      }
  }
  module.exports = { createCategory, allCategory, allSubCategory, createSubCategory };