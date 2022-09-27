import { useState } from "react"
import { onSubmitFilterTwo } from "./Connect"

export const Filtertwo=()=>{
    const[results,setResults]=useState(false)
    const[hold,setHold]=useState([])
    const[two,setTwo]=useState({
        "skills":"",
        "experience":0
    })
    
    const onGetter=(eve)=>{
        const{name,value}=eve.target
        setTwo((old)=>{
           return{
            ...old,
            [name]:value
           }
        })
    }

    const onFilter=async()=>{
       const tmp= await onSubmitFilterTwo(two)
       if(tmp.data){
        if(tmp.data!=="err"){
            setResults(true)
            setHold(tmp.data)
        }
        else{
            alert(tmp.data)
            setResults(false)
        }
       }
       else{
        setResults(false)
       }
       
    }

    const onCancel=()=>{
        setTwo(()=>{
            return{
                "skills":"",
                "experience":0
            }
        })
    }
    return(
        <>
        {
            (results)?
            <>
             <filter show={hold}/>
            </>
            :
            <>
             <div className="container mt-3">
            <h1 className="text-center text-danger display-3">Filtering By Skills and Experience</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-3">
                    <div className="form group">
                        <div className="row">
                            <label>Skills</label>
                            <input type="text" name="skills" value={two.skills} onChange={onGetter} placeholder="Enter your Skills" className="form-control"/>
                        </div>
                        <div className="row">
                            <label>Experience</label>
                            <input type="text" name="experience" value={two.experience} onChange={onGetter} placeholder="Enter your Experience" className="form-control"/>
                        </div>
                        <div className="row justify-content-around mt-3">
                            <button className="btn btn-outline-success col-2" onClick={onFilter}>
                                <i class="bi bi-funnel-fill"></i>
                            </button>
                            <button className="btn btn-outline-danger col-2" onClick={onCancel}>
                                <i class="bi bi-funnel-fill"></i>
                            </button>   

                        </div>

                    </div>

                </div>

            </div>
          </div>  

            </>
        }
          
        </>
    )
}