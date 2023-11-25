// import { useEffect, useState } from "react";
// import {   getShortUrl } from "../services/Url";

// export function ShortUrlClick() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//   const token = localStorage.getItem("token");
//   getShortUrl(token).then((data)=>{
//     if(data){
//         console.log(data);
//         setData(data)
//     }else{
//         console.log("fetch error")
//     }
//   })
      
//   }, []);
//   return (
//     <div>
//         {data}
//     </div>
//   );
// }
