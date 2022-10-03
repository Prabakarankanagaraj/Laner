import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { onSubmitDelete } from "./Connect"

export const Filter=(prop)=>{
    const navi=useNavigate()
    const[stocks,setStocks]=useState(prop.show)

    return(
        <>
        <div className="container mt-3">
            <h1 className="text-center text-danger display-5" style={{fontFamily:"Times New Roman"}}>List of user's</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5 rounded-3" style={{backgroundColor:"snow"}}>
                    {
                        typeof(stocks[0]==="string")?
                        <>
                         <div className="d-flex flex-row flex-nowrap overflow-auto">
                            {
                                stocks.map((str)=>(
                                    <div className="card p-5 shadow rounded-3">
                                        <h1 className="card-title">{str}</h1>
                                    </div>                                       
                                ))
                            }

                        </div> 
                        </>
                        :
                        <>
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
                                                    stocks.map((obj,pos)=>(
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
                        </>
                    }

                </div>

            </div>

        </div>
        </>
    )
}