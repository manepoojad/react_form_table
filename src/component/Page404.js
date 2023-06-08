import { Link } from "react-router-dom"

const Page404=()=>{
    return(
        <div>
            <h1>Page 404</h1>
            <p>This URL not Present</p>
            <Link to="/">Go to Home Page</Link>
        </div>

    )
}
export default Page404