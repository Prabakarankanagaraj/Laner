import { Button } from "bootstrap"
import { useState } from "react"
import { onSubmitLogin } from "./Connect"
import { Signup } from "./Signup"

export const Login=()=>{

    const[sign,setSign]=useState(false)
    const[user,setUser]=useState({
        "username":"",
        "password":""
    })
    const onCollect=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    const onLogin=async()=>{
        await onSubmitLogin(user)
        window.location.assign("/")

    }
    const onCancel=()=>{
        setUser(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }
    return(
        <>
        {
            (sign)?
            <>
             <Signup/>
            </>
            :
            <>
            

            <div className="container mt-4 bg-warning" >
            
            <div className="row justify-content-around mt-5 p-5">
                    <div className="col-lg-4 col-md-10 col-sm-12 mt-5 align-self-center">
                        
                        <h1 className="text-center text-primary display-4" style={{fontFamily:"cursive"}}><b>Lancer</b></h1>
                            <p>Lancer helps you to connect and generate your own money</p>
                            <div className="row justify-content-center">
                              <div className="col-lg-6 col-sm-12">
                              <button className="btn btn-primary mt-5"  onClick={()=>{
                                 setSign(true)
                                  }}>New User's ?
                            </button>
                              </div>
                            </div>
                    </div>

                    <div className="col-lg-4 col-md-10 col-sm-12 shadow p-5 rounded-3 bg-white">
                    <h1 className="text-center text-black display-4" style={{fontFamily:"cursive"}}><b>Lancer</b></h1>
            {/* <div className="row justify-content-center mt-5"> */}
                {/* <div className="col-lg-4 col-md-10 col-sm-12 shadow p-5 rounded-3 " style={{backgroundColor:"rgb(227,227,227)"}}> */}
                        <div className="form group">
                            <label>User Name:</label>
                            <input type="text" name="username" value={user.username} onChange={onCollect} placeholder="Enter Your User Name" className="form-control"/>
                        </div>
                        <div className="form group">
                            <label>Password:</label>
                            <input type="password" name="password" value={user.password} onChange={onCollect} placeholder="Enter Your Password" className="form-control"/>
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button type="button" className="btn btn-success col-2" onClick={onLogin}>
                                <i class="bi bi-door-open-fill"></i>
                            </button>
                            <button type="button" className="btn btn-danger col-2" onClick={onCancel}>
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>
                    {/* </div> */}
                 
            {/* </div> */}

                    </div>
                   

                </div>
           

             </div>
 
            </>
        }
        </>
    )
}