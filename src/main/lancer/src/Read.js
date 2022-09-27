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
                <p>{read.lancerId}</p>
                <p>{read.userName}</p>
                <p>{read.skills}</p>
                <p>{read.location}</p>
                <p>{read.experience}</p>
                <p>{read.commercial}</p>
                <p>{read.previousProject}</p>

            </div>
         </div>

        </>
    )
}