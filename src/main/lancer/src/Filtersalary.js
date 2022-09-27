import { useState } from "react"
import { onSubmitFilterSalary } from "./Connect"
import { Filter } from "./Filter"

export const Filtersalary=()=>{
    const[show,setShow]=useState(false)
    const[datas,setDatas]=useState([])

    const[price,setPrice]=useState({
        "commercial":0.0
    })
    const onGet=(eve)=>{
        setPrice(eve.target.value)
    }

    const onPlus=async()=>{
        const tmp=await onSubmitFilterSalary(price)
        if(tmp.data){
            if(tmp.data!=="err"){
                setShow(true)
                setDatas(tmp.data)
            }
            else{
                alert(tmp.data)
                setShow(false)
            }        
        }
        else{
            setShow(false)
        }
    }
    return(
        <>
            {
                (show)?
                <>
                    <Filter show={datas}/>
                </>
                :
                <>
                  <div className="container mt-3">
            <h1 className="text-center text-danger display-3">By Filtering salary </h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12 shadow p-5">
                    <div className="form group">
                        <input type="text" placeholder="Enter the Salary" name="commercial" value={price.commercial} onChange={onGet} className="form-control"/>
                    </div>
                    <div className="row justify-content-around mt-3">
                    <button className="btn btn-outline-success col-2" onClick={()=>onPlus()}>
                         <i class="bi bi-cloud-upload"></i>
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