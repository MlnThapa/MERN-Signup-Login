import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit= async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:9000/",{
                email,
                password
            })
            .then(res=>{
                if(res.data === "exist"){
                    history("/home",{state:{id:email}});
                }
                else{
                    alert("No user found");
                }
            })
            .catch(e=>{
                alert("wrong details");
                console.log(e)
            })
        }catch(e){
            console.log(e);
        }
    }

  return (
    <div>
        <h1>Login</h1>

        <form action="POST">
            <input type="emial" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" ></input>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
            <input type="submit" onClick={submit}/>
        </form>
        <br/>
        <p>OR</p>
        <br/>
        <Link to="/Signup">Signup Page</Link>
    </div>
  )
}


export default Login