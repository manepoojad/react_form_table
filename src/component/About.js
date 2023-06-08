import { Link } from "react-router-dom"
const About = () => {
    return <>
        <h1>About Page</h1>
        <p>This is About Page fo our awesome App</p>
        <p>and here we are learning about Router</p>
        <Link to="/">Go to Home Page</Link>
        <li><a href='/user/Pooja'>Pooja</a></li>
        <li><a href='/user/Bharat'>Bharat</a></li>
    </>
}
export default About