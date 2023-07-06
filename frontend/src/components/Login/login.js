import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import '../../App.css'

export default function Login({ onLogin }) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

const submitData = async (e)=>{
    let dataa = {
        email:email,
        password:pass
    }
    e.preventDefault();
    axios.post('http://localhost:4000/adminLogin', dataa)
    .then((response) => {
        if(response.data != 'success'){
            toast('Invalid Credential !', {
                position: "top-center",
                type: "error",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false
        }else{
            onLogin();

            navigate('/dashboard')
          console.log(response.data);
        }
       
    })
    .catch((error) => {
      console.error(error);
    });
}

    return (
        <div className="text-center m-5-auto">
            <ToastContainer />
            <h2>Sign in to us</h2>
            <form method='post' onSubmit={submitData}>
                <p>
                    <label>email address</label><br/>
                    <input type="text" name="first_name" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={pass}  onChange={(e)=>setPass(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    )
}


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function LoginPage({ onLogin }) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   const submitData = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:4000/adminLogin', {
//         email: email,
//         password: pass,
//       });
//       console.log(response.data);
//       localStorage.setItem('auth', response.data);
//       onLogin(); // Call onLogin function passed from the parent component
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="text-center m-5-auto">
//       <h2>Sign in to us</h2>
//       <form method="post" onSubmit={submitData}>
//         <p>
//           <label>email address</label>
//           <br />
//           <input
//             type="text"
//             name="first_name"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </p>
//         <p>
//           <label>Password</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             required
//           />
//         </p>
//         <p>
//           <button id="sub_btn" type="submit">
//             Login
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }