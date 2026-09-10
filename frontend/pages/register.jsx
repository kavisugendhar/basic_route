import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register () {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [error,setError] = useState("");

    const handleregister = async (e) => {
        e.preventDefault()
    
    try {
        await axios.post(
            `${API_URL}/api/auth/register`,
            {
                name,
                email,
                password,
            }
        )
    navigate("/", {
        state: {
            registered : true,
        }
    })
    
    
    }
    catch (error) {
        setError(
            error.response?.data?.message || 
            "Registration Failed"
        )
    }
    
    }
    return (
         <div style = {{ maxWidth : '400px', margin: '50px auto', fontFamily: 'Arial', border : '1px solid black' , padding :'50px' , borderRadius : '40px' , alignContent : "center" , background : '#0701b6'}}>
        <div className="authcontainer">
            <div className="authbox">

                <h2 style={{color : "white",display:'flex', justifyContent : "center"}}>Register</h2>

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <form onSubmit={handleregister}>
                    
                   
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            
           style ={{width : '100%', padding : '8px', marginTop : '5px'}}
            /> 

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             style ={{width : '100%', padding : '8px', marginTop : '5px'}}
            /> 
  

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          style ={{width : '100%', padding : '8px', marginTop : '5px'}}
            /> 
 <div className="btn" style={{display:"flex", justifyContent:'center', color: 'red', padding :'18px', backgroundcolor : '#f90808'}}      >
          <button type="submit">
            Register
          
          </button>
          </div>
                </form>
                </div>
                </div>
              </div>

    )
}

export default Register;