import { useEffect, useState } from "react"

function Apifetch() {
    console.log("execution order 1")
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        test()
        console.log("execution order 5")
        getJsonPlaceholderData()
    }, [])

    const getJsonPlaceholderData = async () => {
        console.log("execution order 6")
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const responseDataList = await response.json()
        setDataList(responseDataList)
    }
    const test=()=>{
        console.log("execution order 4")
    }
    

    // console.log(dataList)
    console.log("execution order 2")
    return (
        <div>
            { console.log("execution order 3")}
            <h1>API Fetch Call Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        dataList.map((item, index) =>
                        (
                            <tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>

                            </tr>
                        )

                        )
                    }
                </tbody>
            </table>



        </div>
    )
}

export default Apifetch