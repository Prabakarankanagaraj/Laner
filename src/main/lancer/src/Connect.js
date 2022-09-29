import axios from "axios"
// const auth="praba:karan"
// const token=btoa(auth)

export const onSubmitLogout=async()=>{
    try{
        const t=await axios.get(`/login?logout`)
        sessionStorage.removeItem("user")
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitLogin=async(object)=>{
    const credientials =object.username+":"+object.password
    const tok=btoa(credientials)
    try{
        const t=await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${tok}`
            }
        })
        if(t.data){
            sessionStorage.setItem("user",tok)
            return 
        }
        
    }
    catch(err){
        alert(err)
    }
}

export const onSignUp=async(object)=>{
    try{
        const t=await axios.post(`/api/signup`,object)
        return t
    }    
    catch(err)
    {
        alert(err)
    }
}

export const onSubmitRemove=async(obj)=>{
    try{
        const t=await axios.delete(`/api/delAll/${obj}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err)
    {
        alert(err)
    }
}

export const onSubmitUpdateCondition=async(obj)=>{
    try{
        const t=await axios.put(`/api/ups/${obj}`,{
            headers:{
                "Authorization":` Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err)
    {
        alert(err)
    }
}

export const onSubmitFilterExperience=async(obj)=>{
    try{
        if(obj!==0){
            alert(obj)
            const t=await axios.get(`/api/byexperience/${obj}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem("user")}`
                }
            })
             return t
        }
        else{
            return{"err":"Invalid Filter call"}
        }
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitFilterSalary=async(obj)=>{
    try{
        if(obj!==0.0){
            const t=await axios.get(`/api/bysalary/${obj}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem("user")}`
                }
                
            })
            return t
        }
        else{
            return{"err":"Invalid filter call"}
        }
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitFilterSkill=async(obj)=>{
    try{
        if(obj!==""){
            const t=await axios.get(`/api/byskills/${obj}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem("user")}`
                }
            })
            return t
        }
        else{
            return{"err":"Invalid filter call"}
        }
    }
    catch(err){
        alert(err)
    }

}

export const onSubmitFilterTwo=async(obj)=>{
    try{
        if(obj.skills!==""&obj.experience!==0){
            const t=await axios.get(`/api/bytwo/${obj.skills}/${obj.experience}`,{
                headers:{
                    "Authorization":`Basic ${sessionStorage.getItem("user")}`
                }
            })
            return t            
        }
        else{
            return{"err":"Invalid filter call"}
        }
    }
    catch(err){
        alert(err)
    }
}
export const onSubmitFilterSkills=async(obj)=>{
    try{

        if(obj!==""){
            const t=await axios.get(`/api/bytech/${obj}`,{
                headers:{
                    "Authorization":` Basic ${sessionStorage.getItem("user")}`
                }
            })
            return t
        }
        else{
            return {"err":"Invalid filter call"}
        }        
        
    }
    catch(err){
        alert(err)
    }
}

 export const onSubmitDelete=async(get)=>{
    try{
        const t=await axios.delete(`/api/delid/${get}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
 }

export const onSubmitUpdate=async(obj)=>{
    try{
        const t=await axios.put(`/api/up`,obj,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitRead=async(id)=>{
    try{
        const t=await axios.get(`/api/${id}`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}


export const onSubmitList=async()=>{
    try{
        const t=await axios.get(`/api/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const onSubmitCreate=async(object)=>{
    alert(JSON.stringify(object))
    try{
        const t=await axios.post(`/api/new`,object,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem("user")}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }

}

