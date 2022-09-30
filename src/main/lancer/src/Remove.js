import { useState } from "react"
import { json, useNavigate } from "react-router-dom"
import { onSubmitRemove } from "./Connect"

export const Remove=()=>{
    const n=useNavigate()
    const[remove,setRemove]=useState("")
    const onRemove=(eve)=>{
        setRemove(eve.target.value)
    }
  const onTrash=async()=>{
        const tmp = await onSubmitRemove(remove)
        alert(JSON.stringify(tmp.data))
        n("/view")

    }
    return(
        <>
          <div className="container mt-3">
            <h1 className="text-center text-black display-4">Delete All TypesLike</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5 rounded-5" style={{backgroundColor:"rgb(227,227,227)"}}>
                    <div className="form group">
                        <input type="text" placeholder="Enter the word/Letters of skills" name="skills" value={remove.skills} onChange={onRemove} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-success col-2" onClick={onTrash}>
                        <i class="bi bi-trash"></i>
                    </button>
                    </div>

                </div>

            </div>

        </div>
 
        </>
    )
}