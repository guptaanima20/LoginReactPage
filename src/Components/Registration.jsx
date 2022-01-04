import { useState } from "react";
import React from 'react';
import { useEffect } from "react/cjs/react.development";

//To set from local storage //

// const getLocalItems = () =>{
//     let list = localStorage.getItem('AllUserlists');
//     console.log(list);
//     if(list){
//       return JSON.parse(localStorage.getItem('AllUserlists'));
//     }else{
//       return[];
//     }
//   }


const Registration = () =>{
    const [user, setUser] = useState(
        {FirstName: "", LastName: "", Email: "" ,Password: ""});
        const [info,setInfo] = useState([]);
      
    const submitHandler = (e) =>{

        e.preventDefault();
        setInfo([...info,user])        
        localStorage.setItem("Email", user.Email);
        localStorage.setItem("Password", user.Password);
        localStorage.setItem("FirstName", user.FirstName);
        localStorage.setItem("LastName", user.LastName);
        
        setUser({FirstName:"",LastName:"",Email:"",Password:""}); 
        
    }
    useEffect(() => {
        setInfo(JSON.parse(localStorage.getItem('AllUserlists')))
    },[])
   useEffect(() => {
    localStorage.setItem('AllUserlists',JSON.stringify(info));
   },[info])
   
    return(
        <>
        <form onSubmit={submitHandler}>
        <label type="text">FirstName:</label>
        <input type="text" id="firstname" value={user.FirstName} onChange={(e)=>setUser({...user,FirstName: e.target.value })}></input><br />
        <label type="text" >LastName:</label>
        <input type="text" id="lastname" value={user.LastName} onChange={(e)=>setUser({...user,LastName: e.target.value })}></input><br />
        <label type="text">Email:</label>
        <input type="text" id="email" value={user.Email} onChange={(e)=>setUser({...user,Email : e.target.value})}></input><br />
        <label type="text">Password:</label>
        <input type="password" id="password" value={user.Password} onChange={(e)=>setUser({...user,Password : e.target.value})}></input><br />
        <button type="submit">Submit</button>
        </form>
        {/* {
        
        info.map((curele,index) =>{
            return(
             <div className="content-area" key={index}>
                 <p>{curele?.fullname}</p>
                 <p>{curele?.email}</p>
                 <p>{curele?.phone}</p>
                 <p>{curele?.password}</p>
                 </div>
            )
        
        })
      } */}
        </>
    )
}
export default Registration;