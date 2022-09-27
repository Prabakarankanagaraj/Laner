import { useState } from "react"
import { onSubmitFilterSkills } from "./Connect"
import { Filter } from "./Filter"

export const BySkills=()=>{

    const[result,setResult]=useState(false)
    const[value,setValue]=useState([])

    const[tech,setTech]=useState({
        "skills":""
    })

    const onCollect=(eve)=>{
        setTech(eve.target.value)
    }

    const onTech=async()=>{
        const tmp=await onSubmitFilterSkills(tech)
        if(tmp.data){
            if(tmp.data!=="err"){
                setResult(true)
                setValue(tmp.data)
            }
            else{
                alert(tmp.data)
                setResult(false)
            }
        }
        else{
            setResult(false)
        }
    }

    return(
        <>
          {
            (result)?
            <>
             <Filter show={value}/>
            </>
            :
            <>
            <div className="container mt-3">
            <h1 className="text-center text-danger display-3">By Filtering Skills</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5">
                    <div className="form group">
                        <input type="text" placeholder="Enter the skills" name="skills" value={tech.skills} onChange={onCollect} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-outline-success col-2" onClick={onTech}>
                         <i class="bi bi-filter"></i>
                    </button>
                    </div>

                </div>

            </div>

        </div>
            </>
          }        
        
        </>
    )
}