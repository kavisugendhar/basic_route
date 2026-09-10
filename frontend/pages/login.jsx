import { useState } from "react";

import axios from "axios";
import { Link, useLocation, useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const location = useLocation()

    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [error, setError] = useState("")

const registered = location.state?.registered;

const handlelogin = async (e) => {
    e.preventDefault()

    try {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            {
                email,
                password
            }
        )
        localStorage.setItem (
            "user",
            JSON.stringify(response.data.user)
        )
    
        navigate("/dashboard")
    }
        catch (error) {
            setError (
                error.response?.data?.message || 
        <p className="success" style={{ color: '#b1dced', fontFamily :"fangsong",}}>
                       Login Failed
                    </p>
            )
        }
    
    }

    return (
         <div style = {{ maxWidth : '400px', margin: '50px auto', fontFamily: 'Arial', border : '1px solid black' , padding :'50px' , borderRadius : '40px' , alignContent : "center" , background : '#0701b6'}}>
  
        <div className="authcontainer">
            <div className="authbox">
             
               <h2 style={{color : "white",display:'flex', justifyContent : "center"}}> Login</h2>
                { registered && (
                    <p className="success" style={{ color: '#b1dced', fontFamily :"fangsong",}}>
                        Registration Successfull Please Login
                    </p>
                )}
                { error && (
                    <p className="errpr">
                        {error}
                    </p>
                )}
            <form onSubmit={handlelogin}>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            required
            style ={{width : '100%', padding : '8px', marginTop : '5px'}}
            /> 
            <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           required
           style ={{width : '100%', padding : '8px', marginTop : '5px'}}
           />
            <div className="btn" style={{display:"flex", justifyContent:'center', color: 'red', padding :'8px', backgroundcolor : '#f90808'}}      >
           <button type = "submit"> 
            Login
           
           </button>
           </div>
           </form>     
            <p style={{color : 'white' , fontFamily : 'sans-serif'}}> 
                Don't have an account?{" "}
                
                <Link to= "/register" style={{color: 'yellow'}}>
                Register</Link>

            </p>
                
                </div>
                </div>
                </div>
    )


}

export default Login;