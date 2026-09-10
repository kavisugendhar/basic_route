import { useNavigate } from "react-router-dom";

function Dashboard(){
 const navigate = useNavigate()

 const user = JSON.parse(
    localStorage.getItem("user")
 );

 const logout = () => {
    localStorage.removeItem("user");
    navigate("/")
 };
 return (
 <div style = {{ maxWidth : '800px', margin: '190px auto', fontFamily: 'Arial', border : '1px solid black' , padding :'50px' , borderRadius : '40px' , alignContent : "center" , background : '#0701b6'}}>
    <div>
        
        <h1 style={{display:'flex',justifyContent: 'center' , color : '#41f46e', fontFamily : "-moz-initial", fontWidth: '50px'}}> Welcome {user?.name}</h1>
        <p style={{display:'flex',justifyContent: 'center', color : 'white', fontFamily : "fantasy", fontWidth:"90px"}}> 
            Login Successful
        </p>
        <div style={{display:'flex',justifyContent: 'center'}} >
        <button onClick={logout}>
            Logout
        </button>
        </div>
    </div>
    </div>
 )
}
export default Dashboard