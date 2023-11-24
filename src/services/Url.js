// import axios from "axios"

export const ApiUrl = "https://nanourl.onrender.com/url"

export async function getAllUrl(){
    const res = await fetch (`${ApiUrl}/all`,{
        method:"GET",
        headers:{
             "x-auth-token": localStorage.getItem("token") 
        }
    })
 const data = res.json()
 console.log(data)
 return data
}



export async function getShortUrl(){
    const res = await fetch (`${ApiUrl}/:urlId`,{
        method:"GET",
        headers:{
             "x-auth-token": localStorage.getItem("token") 
        }
    })
 const data = res.json()
 console.log(data)
 return data
}






export async function handleShort(payload){
    const res = await fetch(`${ApiUrl}/short`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "x-auth-token":localStorage.getItem("token"),
            "Content-Type": "application/json",
        }
    })
    const data = await res.json();
    console.log(data)
    return data
}








// function Urlshort(){
//     const [url,setUrl]=useState([]);
//     const token = localStorage.getItem("token");
//     useEffect(() => {
//       getShortUrl(token).then((url) => {
//         if (url) {
//           console.log(url);
//           setUrl(url);
//         } else {
//           console.log("fetch error");
//         }
//       });
//     }, []);
//     return(
//       <div>
//         <h1>Short Url's</h1>
//         {url.map((short,index)=>{
//           return (
//             <div>
//               <Card style={{ width: '18rem'}} key={short._id}>
//                 <Card.Body>
//                   {short.urlId}
//                 </Card.Body>
//               </Card>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }