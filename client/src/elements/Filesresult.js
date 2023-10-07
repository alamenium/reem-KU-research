import "../../../the-new-student-server-main/client/src/styles/avatar.css"
import React, { useEffect } from "react";


function Filesresult(props){
    const files=props.items;
    const list=[]
  useEffect(() => {
    // example API call
   
    console.log(files)
    console.log("loadedfiles")
  }, [props]);
 
  
   
 
    
  




    return(
        <div className="flexContainer">
       
        </div>
    );
}
export default Filesresult;
