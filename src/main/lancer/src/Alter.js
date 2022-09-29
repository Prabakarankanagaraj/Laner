import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitUpdateCondition } from "./Connect"

export const Alter=()=>{
    const n=useNavigate()
    const[alter,setAlter]=useState(0)
    const onAlter=(eve)=>{
        setAlter(eve.target.value)
    }
    const onUps=async()=>{
        await onSubmitUpdateCondition(alter)
        n("/view")
    }
    return(
        <>
          <div className="container mt-3">
            <h1 className="text-center text-danger display-3">By Altering salary By Experience</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5 rounded-5" style={{backgroundColor:"rgb(227,227,227)"}}>
                    <div className="form group">
                        <input type="text" placeholder="Enter the experience" name="experience" value={alter.experience} onChange={onAlter} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-success col-2" onClick={onUps}>
                         <i class="bi bi-filter"></i>
                    </button>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}