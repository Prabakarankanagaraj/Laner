import { useState } from "react"
import { onSubmitFilterSkill } from "./Connect"
import { Filter } from "./Filter"

export const Filterskills=()=>{
    const[view,setView]=useState(false)
    const[put,setPut]=useState([])
    const[techie,setTechie]=useState({
        "skills":""
    })
    const onObtain=(eve)=>{
        setTechie(eve.target.value)
    }
    const onTechie=async()=>{
       const tmp= await onSubmitFilterSkill(techie)
        if(tmp.data){
            if(tmp.data!=="err"){
                setView(true)
                setPut(tmp.data)
            }
            else{
                alert(tmp.data)
                setView(false)
            }
        }
        else{
            setView(false)
        }
    }

    return(
        <>
         {
            (view)?
            <>
              <Filter show={put}/>
            </>
            :
            <>
             <div className="container mt-3">
            <h1 className="text-center text-danger display-3">By Filtering skills to details of user </h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5">
                    <div className="form group">
                        <input type="text" placeholder="Enter the skills" name="skills" value={techie.skills} onChange={onObtain} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-outline-success col-2" onClick={onTechie}>
                        <i class="bi bi-filter-square"></i>
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