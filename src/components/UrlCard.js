import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UrlCard(item) {

  return (
 
      <div >
        
        <Card >
        <h3>{item.origUrl}</h3>
          <h3>{item.shortUrl}</h3>
          <h3>{item.urlId}</h3>
          <h3>{item.date}</h3>
           <h5 >{item.clicks}</h5>
          <Link to={"/short"} >View/Add your URL's</Link>
        </Card>
      
     
    </div>
  );
}

export default UrlCard;



















// import { useState } from "react";
// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function UrlCard({urls}) {
//   const[click,setClick]=useState("")
//   const [count,setCount]=useState("")
// const  handleClick=()=>{
//   setClick(click)
//   setCount(count+1)
//  }
  
//     return (
//       <div >
 
        
//             {urls && (
//         <div>
//           {urls?.map((url) => {
//              return (
//               <Card key={url._id}>
                
//                 <h3>Your Shorted URLs </h3>
        
//         <h5> Total URL Created : {urls.length} </h5>
//                <h2>{urls.origUrl}</h2>
//                <h3>{urls.shortURL}</h3>
//                <h5>{urls.date}</h5>
//                <h2>{urls.urlId}</h2>
//                 <h5 >{urls.clicks}Total number of clicks: {handleClick()}{" "}</h5>
              
//                 <Link to={"/short"} className="submit">  View/Add your URL's</Link>
           
//               </Card>
//             );
//           })}
//         </div>
//       )}

//       </div>
//     );
//   }
  
//   export default UrlCard;