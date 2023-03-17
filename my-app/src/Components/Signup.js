import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

function Signup() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const history = useNavigate();

    let submit = async(e)=>{
        e.preventDefault();

        try{
            await axios.post("http://localhost:9000/Signup",{
                email,
                password
            })
            .then(res=>{
                if(res.data==='exist'){
                    alert("Username already exists")
                }else{
                    history("/home",{state:{id:email}})
                }
            })
        }catch(e){
            alert("wrong details");
            console.log(e)
        }
    }
  return (
    <div>
        <h1>Signup Page</h1>
        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
            <input type="submit" onClick={submit}/>
        </form>
        <br/>
        <p>OR</p>
        <br/>
        <Link to="/">Login Page</Link>
    </div>
  )
}

export default Signup