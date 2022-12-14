import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete, onSubmitFilterTwo } from "./Connect"

export const Filtertwo=()=>{
    const navi=useNavigate()
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
             {/* <filter show={hold}/> */}
             <div className="row justify-content-center">
             <div className="col-lg-6 col-md-10 col-12 p-5 ">
             <div className="table-responsive">
                                        <table className="table table-hover table-nowrap p-5" style={{backgroundColor:"snow"}}>
                                            <thead>
                                                <tr>
                                                    <th>LancerId</th>
                                                    <th>userName</th>
                                                    <th>Skills</th>
                                                    <th>Location</th>
                                                    <th>Experience</th>
                                                    <th>Commercial</th>
                                                    <th>previousProject</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    hold.map((obj,pos)=>(
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
            <h1 className="text-center text-black display-4" style={{fontFamily:"Times New Roman"}}><b>Filtering By Extech</b></h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5 rounded-3" style={{backgroundColor:"rgb(227,227,227)"}}>
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