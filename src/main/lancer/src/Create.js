import { useState } from "react"
import { onSubmitCreate } from "./Connect";

export const Create=()=>{
    const[create,setCreate]=useState({
        "userName":"",
        "skills":"",
        "location":"",
        "experience":0,
        "commercial":0.0,
        "previousProject":0
    })

    const onDetect=(obj)=>{
        const{name,value}=obj.target
        setCreate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onSubmit=async()=>{
        const tmp= await onSubmitCreate(create)
        alert(JSON.stringify(tmp.data))

    }

   const onCancel=()=>{
        setCreate(()=>{
            return{
                "userName":"",
                "skills":"",
                "location":"",
                "experience":0,
                "commercial":0.0,
                "previousProject":0
            }
        })
    }

    return(
        <>
         <div className="container mt-3">
            <h1 className="text-center text-dark" style={{fontFamily:"Times New Roman"}}>Register Page</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 p-5 shadow rounded-5" style={{backgroundColor:"rgb(227,227,227)"}}>
                   <div className="row">
                        <label>Username :</label>
                        <input type="text" name="userName" onChange={onDetect} value={create.userName} placeholder="Enter your name" className="form-control"/>
                   </div>
                   <div className="row">
                   <label>Skills :</label>
                        <input type="text" name="skills" onChange={onDetect} value={create.skills} placeholder="Enter your skills" className="form-control"/>
                   </div>
                   <div className="row">
                   <label>Location :</label>
                        <input type="text" name="location" onChange={onDetect} value={create.location} placeholder="Enter your area" className="form-control"/>
                   </div>
                   <div className="row">
                   <label>Experience :</label>
                        <input type="text" name="experience" onChange={onDetect} value={create.experience} placeholder="Enter your experience" className="form-control"/>
                   </div>
                   <div className="row">
                   <label>Commercial :</label>
                        <input type="text" name="commercial" onChange={onDetect} value={create.commercial} placeholder="Enter your salary" className="form-control"/>
                   </div>
                   <div className="row">
                   <label>Previous Project :</label>
                        <input type="text" name="previousProject" onChange={onDetect} value={create.previousProject} placeholder="Enter your counts" className="form-control"/>
                   </div>  
                   <div className="mt-3 row justify-content-around">
                    <button className="btn btn-outline-success col-3" onClick={onSubmit}>
                    <i class="bi bi-file-earmark-arrow-up"></i> Submit</button>
                    <button className="btn btn-outline-danger col-3 ms-4" onClick={onCancel}>
                    <i class="bi bi-x-circle-fill"></i> Cancel</button>
                </div>    


                </div>               
                
            </div>
        
            
         </div> 

        </>
    )
}