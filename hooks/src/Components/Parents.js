import {userContext} from "./userContext";
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
const ParentComponent = () => {
    const user = {
        name : "Vivek",
        age : 20
    }
    return(
        <userContext.Provider value={user}>
            <div>
                <h1> Parent Components</h1>
                <p> Name : {user.name}, Age : {user.age} </p>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>
        </userContext.Provider>
    )
}
export default ParentComponent;