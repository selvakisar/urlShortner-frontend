import { useEffect, useState } from "react"
import { ApiUrl, getShortUrl } from "../services/Url";
import { Card } from "react-bootstrap";

export function ShortUrlClick(){
    const [data,setData]=useState([]);
   

    useEffect(()=>{
        const shortUrls = async()=>{
            try {
                const res = await fetch(`${ApiUrl}/:urlId`,{
                   method: "GET",
                   headers:{
                    "x-auth-token":localStorage.getItem("token"),
                    "Content-Type": "application/json",
                   } ,

                })
                if(!data){
                    console.log("No data")
                }
                await res.json();
                setData(data);
            } catch (error) {
                console.log(error)
            }
        }
        shortUrls();
    },[])
    return(
        <div>
            <h1>short urls</h1>
            {data.map((data,id)=>{
                return (
              <Card.Link href={"`${ApiUrl}/${data}`"}  onClick={()=>getShortUrl()}>Url Id: {data.urlId} </Card.Link>

                )
            })}

        </div>
    )
}