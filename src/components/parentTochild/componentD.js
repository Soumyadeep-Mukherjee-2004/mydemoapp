import { userContext } from "../../App";
import { useContext } from "react";
const CompD = () => {
    const {isReadOnly} = useContext(userContext);

    return (
        <div>
            <h1>This is component D</h1>
            
            <button disabled={isReadOnly}>Click me</button>
        </div>
    );
}
export default CompD;