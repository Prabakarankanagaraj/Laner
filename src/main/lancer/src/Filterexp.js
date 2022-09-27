import axios from "axios"
import { useState } from "react"
import { onSubmitFilterExperience } from "./Connect"
import { Filter } from "./Filter"

export const Filterexp=()=>{

    const[look,setLook]=useState(false)
    const[keep,setKeep]=useState([])

    const[expert,setExpert]=useState({
        "experience":""
    })
    const onCheck=(eve)=>{
        setExpert(eve.target.value)
    }
    const onAdd=async()=>{
        const tmp=await onSubmitFilterExperience(expert)
        if(tmp.data){
            if(tmp.data!=="err"){
                setLook(true)
                setKeep(tmp.data)
            }
            else{
                alert(tmp.data)
                setLook(false)
            }
        }
        else{
            setLook(false)
        }
    }
    return(
        <>
         {
            (look)?
            <>
             <Filter show={keep}/>
            </>
            :
            <>
            <div className="container mt-3">
            <h1 className="text-center text-danger display-3">By Filtering Experience of user </h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5">
                    <div className="form group">
                        <input type="text" placeholder="Enter the Experience" name="experience" value={expert.experience} onChange={onCheck} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-outline-success col-2" onClick={onAdd}>
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