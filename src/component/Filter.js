import { useSearchParams } from "react-router-dom"

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    const city = searchParams.get('city')
    return (
        <div>
            <h1>This is Filter Page</h1>
            <h3>My age is: {age}</h3>
            <h3>My city is: {city}</h3>
        </div>
    )
}
export default Filter