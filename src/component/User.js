import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
const User=()=>{
    const params=useParams()
    const {name}=params
    return(
        <div>
           <h1>This is {name}'s Page</h1>
           <Link to="/about">Go to About Page</Link>
            </div>
    )
}
export default User