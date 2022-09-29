import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { onSubmitRead } from "./Connect"

export const Read=()=>{

    const{key}=useParams()

    const[read,setRead]=useState({})

    const onRead=async()=>{
        alert(key)
       const tmp= await onSubmitRead(key)
       setRead(tmp.data)

    }

    useEffect(()=>{
        onRead()
    },[])


    return(
        <>
         <div className="alert alert-primary text-center">
            <h1>User Details</h1>
            <div className="row justify-content-center">
                <p><label>ID         -</label>          {read.lancerId}</p>
                <p><label>Username   -</label>          {read.userName}</p>
                <p><label>Skills     -</label>          {read.skills}</p>
                <p><label>Location   -</label>          {read.location}</p>
                <p><label>Experience -</label>          {read.experience}</p>
                <p><label>Salary     -</label>          {read.commercial}</p>
                <p><label>Count      -</label>          {read.previousProject}</p>

            </div>
         </div>

        </>
    )
}