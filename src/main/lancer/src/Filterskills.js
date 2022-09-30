import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete, onSubmitFilterSkill } from "./Connect"
import { Filter } from "./Filter"

export const Filterskills=()=>{
    const navi=useNavigate()
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
              {/* <Filter show={put}/> */}
              <div className="row justify-content-center">
             <div className="col-lg-6 col-md-10 col-12 p-5 ">
             <div className="table-responsive">
                                        <table className="table table-hover table-nowrap p-5" style={{backgroundColor:"snow"}}>
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
                                                    put.map((obj,pos)=>(
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
            <h1 className="text-center text-black display-4"><b>By Filtering skills</b></h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5 rounded-3" style={{backgroundColor:"rgb(227,227,227)"}}>
                    <div className="form group">
                        <input type="text" placeholder="Enter the skills" name="skills" value={techie.skills} onChange={onObtain} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-success col-2" onClick={onTechie}>
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