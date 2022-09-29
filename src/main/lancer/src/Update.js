import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead, onSubmitUpdate } from "./Connect"

export const Update=()=>{
    const {primary}=useParams()

const[change,setChange]=useState({})

const onRead=async()=>{
    const tmp=await onSubmitRead(primary)
    setChange(tmp.data)

}

useEffect(()=>{
    onRead()
},[])

const onGather=(eve)=>{
    const{name,value}=eve.target
    setChange((old)=>{
        return{
            ...old,
            [name]:value
        }
    })
}
const onAdd=async()=>{
    const tmp=await onSubmitUpdate(change)
    alert(JSON.stringify(tmp.data))
}

const onReset=()=>{
    setChange(()=>{
        return{
            "userName":"",
            "skills":"",
            "location":"",
            "experience":"",
            "commercial":0.0,
            "previousProject":0
        }
    })
}

    return(
        <>
          <div className="mt-3 container">
            <h1 className="text-center text-black display-5">Update your Details here</h1>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-10 col-sm-12 shadow p-5 rounded-5" style={{backgroundColor:"rgb(227,227,227)"}}>
                    <div className="row">
                             <input type="text" name="userName" value={change.userName} onChange={onGather} placeholder="Your Name" className="form-control" />
                      </div>
                     <div className="row mt-2">
                              <input type="text" name="skills" value={change.skills} onChange={onGather} placeholder="Your Skills" className="form-control" />
                     </div>
                    <div className="row mt-2">
                             <input type="text" name="location" value={change.location} onChange={onGather} placeholder="Your Area" className="form-control" />
                    </div>
                     <div className="row mt-2">
                              <input type="text" name="experience" value={change.experience} onChange={onGather} placeholder="Your Experience" className="form-control" />
                     </div>
                    <div className="row mt-2">            
                            <input type="text" name="commercial" value={change.commercial} onChange={onGather} placeholder="Your salary" className="form-control" />
                    </div>
                    <div className="row mt-2">            
                            <input type="text" name="previousProject" value={change.previousProject} onChange={onGather} placeholder="Your Project Count" className="form-control" />
                    </div>

                    <div className="row justify-content-around mt-3">
                        <button className="btn btn-success col-2" onClick={onAdd}>
                        <i class="bi bi-person-plus"></i> 
                        </button>
                        <button className="btn btn-danger col-2" onClick={onReset}>
                        <i class="bi bi-x-square-fill"></i>
                        </button> 
                    </div>

                </div>

            </div>

          </div>
        </>
    )
}