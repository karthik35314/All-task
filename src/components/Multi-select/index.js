import React,{useState} from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Pagethree } from "./pagethree";

export const Login = () => {
 
    const [name, setname] = useState(null)

const handleChange =(e)=>{
    e.preventDefault();
    var email = e.target.value;
    var name   = email.substring(0, email.lastIndexOf("@"));
    setname(name)
    console.log(name);
}



  return (
    <div className="App">
      <h1>Login</h1>
      <label>email</label> <input type="text" name="name"  onChange={(e)=>{handleChange(e)}} />
      <label>password</label> <input type="password" name="password"  />
      <Link
        to={{
          pathname: `/page/${name}`,
          state:  { message: `${name}` }  ,
        }}
      >
        Login
      </Link>
  
  
    </div>
  );
};
