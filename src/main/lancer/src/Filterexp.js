import axios from "axios"
import { useState } from "react"
import { onSubmitFilterExperience } from "./Connect"
import { Filter } from "./Filter"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete } from "./Connect"

export const Filterexp=()=>{
    const navi=useNavigate()
    const[look,setLook]=useState(false)
    const[info,setInfo]=useState([])

    const[expert,setExpert]=useState({
        "experience":0
    })
    const onCheck=(eve)=>{
        setExpert(eve.target.value)
    }
    const onAdd=async()=>{
        const tmp=await onSubmitFilterExperience(expert)
        if(tmp.data){
            if(tmp.data!=="err"){
                setLook(true)
                setInfo(tmp.data)
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
            {/* <Filter show={info}/> */}
            <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 col-12 p-5 ">

            <div className="table-responsive">
                                        <table className="table table-hover table-nowrap p-5" style={{backgroundColor:"rgb(227,227,227)"}}>
                                            <thead>
                                                <tr>
                                                    <th>LancerId</th>
                                                    <th>userName</th>
                                                    <th>Skills</th>
                                                    <th>Loacation</th>
                                                    <th>Experience</th>
                                                    <th>Commercial</th>
                                                    <th>previousProject</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    info.map((obj,pos)=>(
                                                   <tr>
                                                        <td>
                                                            <a className="btn btn-outline-info" href={`/#/open/${obj.lancerId}`} >
                                                                {obj.lancerId}
                                                            </a>
                                                        </td>
                                                        <td>{obj.userName}</td>
                                                        <td>{obj.skills}</td>
                                                        <td>{obj.location}</td>
                                                        <td>{obj.experience}</td>
                                                        <td>{obj.commercial}</td>
                                                        <td>{obj.previousProject}</td>
                                                        <td>
                                                            <a className="btn btn-outline-warning" href={`/#/modify/${obj.lancerId}`}>
                                                                <i class="bi bi-box-arrow-up-right col-3"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-outline-danger" onClick={async()=>{
                                                                const tmp=await onSubmitDelete(obj.lancerId)
                                                                alert(tmp.data)
                                                                navi("/#/view")
                                                            }}>                                         
                                                            <i class="bi bi-box-arrow-up-left col-3"></i>       
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    ))
                                                }
                                            </tbody>

                                        </table>

                    </div>
                </div>
            </div>     

            </>
            :
            <>
            <div className="container mt-3">
            <h1 className="text-center text-black display-4"><b>By Filtering Experience</b></h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5 rounded-3" style={{backgroundColor:"rgb(227,227,227)"}}>
                    <div className="form group">
                        <input type="text" placeholder="Enter the Experience" name="experience" value={expert.experience} onChange={onCheck} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-success col-2" onClick={onAdd}>
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