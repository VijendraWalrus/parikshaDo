const client = require('../db/db.config');
const bcrypt = require('bcrypt');

async function adminLogin(data) {
        try {
            // await client.connect()
            const query = 'SELECT * FROM admin_login';
            const result = await client.query(query);
            let dataa = result.rows[0] 
            console.log(dataa.email , data.email)
            
            if(dataa.email == data.email && dataa.password == data.password){
                
                let res = 'success'
                return res
            }else{
                return 'Invalid Credential !'
            }
           
          }
         catch (err) {
          console.error('Error during login:', err);
        } 
    
  }
  module.exports = adminLogin;