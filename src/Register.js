import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

function Register() {

    useEffect(() =>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history=useHistory();

    async function signUp() {

        let item={name,password,email}
        console.warn(item)

        let result= await fetch("https://reqres.in/api/register",{
            method:'POST',
            body: JSON.stringify(item),
            header:{
                "Content-Type": 'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")


    } 
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3" >
            <h1>Register Page</h1>
            <br />
            <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) =>setName(e.target.value)} />
            <br />
            <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
            <br />
            <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
            <br />

        </div>
        </>
    )
}

export default Register

// import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
// import Header from "./Header"
// function Register() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     return (
//         <div>
//             <div className="col-sm-6 offset-sm-3" >
//                 <Header />
//                 <h1>Register Page</h1>
//                 <br />
//                 <input type="text" className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <br />
//                 <input type="text" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <br />
//                 <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <br />
//                 <button onClick={signUp} className="btn btn-primary">Sign Up</button>
//                 <br />

//             </div>
//             )
// }


//             export default Register