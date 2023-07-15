import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function Apifetch() {
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        getJsonPlaceholderData()
    }, [])

    const getJsonPlaceholderData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const responseDataList = await response.json()
        setDataList(responseDataList)
    }
    
    return (
        <div>
            <h1>API Fetch Call Page</h1>
            <Table variant="dark" striped>
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
            </Table>



        </div>
    )
}

export default Apifetch