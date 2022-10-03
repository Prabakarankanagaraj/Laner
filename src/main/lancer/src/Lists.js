import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete, onSubmitList } from "./Connect"

export const Lists=()=>{

    const navi=useNavigate()
    const[lists,setLists]=useState([])

    const onList=async()=>{
        const tmp=await onSubmitList()
        setLists(tmp.data)
    }
    useEffect(()=>{
        onList()
    },[])

    return(
        <>
        <div className="container mt-3">
            <h1 className="text-center text-b;ack display-5" style={{fontFamily:"Times New Roman"}}>User's Details</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 p-5 shadow rounded-3" style={{backgroundColor:"rgb(227,227,227)"}}>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover  text-nowrap">
                            <thead>
                                <tr>
                                    <th>LancerID</th>
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
                                    lists.map((obj,pos)=>(
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
                                                    navi("/view")
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

        </div>
        </>
    )
}