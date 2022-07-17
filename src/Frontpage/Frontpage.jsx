import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Frontpage() {
    const [res, setRes] = useState("")
    const [btnName, setBtnName] = useState("Oscardium Leviosa")

    useEffect(() => {
        async function getData(){
        try {
            const tempRes = await axios.get("http://localhost:8080/api/get")
            setRes(tempRes.data);
        } catch (error) {
            console.log(error)
        }
    }
        
        getData();
    },[]);

    return (    
    <div>
        {console.log(res)}
    </div>
  )
}
