    import { useState } from "react"
    import { onSignUp } from "./Connect"
    
    export const Signup=()=>{
        const[details,setDetails]=useState({
            "empName":"",
            "username":"",
            "password":"",
            "email":"",
            "mobile":0
        })
        const onDetail=(eve)=>{
            const{name,value}=eve.target
            setDetails((old)=>{
                return{
                    ...old,
                    [name]:value
                }
            })
        }
        const onSign=async()=>{
            const tmp= await onSignUp(details)
            alert(JSON.stringify(tmp.data))
            window.location.assign("/")
        }
        const onReset=()=>{
            setDetails(()=>{
                return{
                    "empName":"",
                    "username":"",
                    "password":"",
                    "email":"",
                    "mobile":0
                }
            })
        }
        return(
            <>
              <div className="container mt-3">
                <h1 className="text-center text-black dispaly-3">Lancer</h1>
                <div className="row justify-content-center mt-3">
                    <div className="col-lg-6 col-md-10 col-sm-12 p-5 shadow rounded-3" style={{backgroundColor:"rgb(227,227,227)"}}>
                        <div className="form group">
                            <label>Full Name:</label>
                            <input type="text" name="empName" value={details.empName} onChange={onDetail} placeholder="Enter Your Full Name" className="form-control"/>
                        </div>
                        <div className="form group">
                            <label>User Name:</label>
                            <input type="text" name="username" value={details.username} onChange={onDetail} placeholder="Enter Your User Name" className="form-control"/>
                        </div>
                        <div className="form group">
                            <label>Password:</label>
                            <input type="password" name="password" value={details.password} onChange={onDetail} placeholder="Enter your Password" className="form-control"/>
                        </div>
                        <div className="form group">
                            <label>Email:</label>
                            <input type="email" name="email" value={details.email} onChange={onDetail} placeholder="Enter Your email" className="form-control"/>
                        </div>
                        <div className="form group">
                            <label>Mobile NO:</label>
                            <input type="mobile" name="mobile" value={details.mobile} onChange={onDetail} placeholder="Enter Your Mobile" className="form-control"/>
                        </div>
                        <div className="mt-3 row justify-content-around">
                            <button type="button" className="btn btn-outline-success col-2" onClick={onSign}>
                                <i class="bi bi-door-open-fill "></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger col-2" onClick={onReset}>
                                <i class="bi bi-slash-circle "></i>
                            </button>
    
                        </div>
    
                    </div>
    
                </div>
    
              </div>
            </>
        )
    }
