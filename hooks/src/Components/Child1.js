import React,{useContext} from "react";
import { userContext } from "./userContext";
const Child1 = () =>{
    const user = useContext(userContext);
    return(
        <div>
            <h2> Information for Child1</h2>
            <p> Name : {user.name}, Age : {user.age} </p>
        </div>
    )
}
export default Child1;