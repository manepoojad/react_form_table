import { useEffect, useState, } from "react"
import { Table } from "react-bootstrap"

function FormAndTableAPI() {
    const [editStudentIndex, setEditStudentIndex] = useState(null)
    const [studentList, setStudentList] = useState([])

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        knownLanguages: [],
        address: "",
        course: ""

    })

    useEffect(() => {
        getStudentList()
    }, [])

    const handleInputChange = (e) => {

        // const {name,type,value }=e.target
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value

        if (type == "checkbox") {
            const checked = e.target.checked
            let newValue = [...formData.knownLanguages]
            if (checked) {
                newValue.push(value)

            }
            else {
                newValue = newValue.filter(item => item !== value)

            }
            setFormData({
                ...formData,
                knownLanguages: newValue
            })
        }
        else {
            setFormData({
                ...formData,
                [name]: e.target.value,
            })
        }

    }

    const formSubmit = async () => {

        const response = await fetch('http://localhost:8888/student', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        setFormData({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            knownLanguages: [],
            address: "",
            course: ""
        })
        getStudentList()


    }

    const getStudentList = async () => {
        /**
         * get data from backend by using GET api method
         * 
         */
        const response = await fetch('http://localhost:8888/student', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        setStudentList(responseData)

    }




    const updateStudentFormData = async () => {
        const response = await fetch('http://localhost:8888/student', {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        setFormData({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            knownLanguages: [],
            address: "",
            course: ""
        })
        getStudentList()
    }

    const handleDeleteStudentData = async (studentId) => {
        console.log('delete function called')
        const response = await fetch(`http://localhost:8888/student/${studentId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        getStudentList()

    }

    const handleEditStudentData = (studentInfo) => {
        setFormData(studentInfo)

    }

    return (
        <div>
            <form>
                <div>
                    <label>First name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="Enter first Name"
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Last name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter last Name"
                        onChange={e => handleInputChange(e)}
                    /><br />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        placeholder="yyyy-mm-dd"
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <label>Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Other</label>
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === "other"}
                        onChange={e => handleInputChange(e)}
                    /><br />
                </div>
                <div className="formfield">
                    <label>Known Language:</label>
                    <label>English</label>
                    <input
                        type="checkbox"
                        name="knownLanguages"
                        value="english"
                        checked={formData.knownLanguages && formData.knownLanguages.includes("english")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Marathi</label>
                    <input
                        type="checkbox"
                        name="knownLanguages"
                        value="marathi"
                        checked={formData.knownLanguages && formData.knownLanguages.includes("marathi")}
                        onChange={e => handleInputChange(e)} />
                    <label>Hindi</label>
                    <input
                        type="checkbox"
                        name="knownLanguages"
                        value="hindi"
                        checked={formData.knownLanguages && formData.knownLanguages.includes("hindi")}
                        onChange={e => handleInputChange(e)}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        placeholder="Enter address"
                        onChange={e => handleInputChange(e)}>
                    </textarea>
                </div>
                <div>
                    <label>Course Applied for:</label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={e => handleInputChange(e)}>
                        <option>Select</option>
                        <option>Science</option>
                        <option>Com</option>
                        <option>Art</option>
                    </select><br />
                </div>
                <div>
                    {
                        formData.id ?
                            <button type="button" onClick={() => updateStudentFormData()}>Update</button>
                            :
                            <button type='button' onClick={() => formSubmit()}>Submit</button>
                    }
                </div>
            </form>
            <Table variant='dark' striped>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>dateOfBirth</th>
                        <th>Gender</th>
                        <th>KnownLanguages</th>
                        <th>Address</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList && studentList.map((item, index) => {
                            {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.dateOfBirth}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.knownLanguages}</td>
                                        <td>{item.address}</td>
                                        <td>{item.course}</td>
                                        <td>
                                            <button type="button" onClick={() => handleDeleteStudentData(item.id)} >Delete</button>
                                            <button type="button" onClick={() => handleEditStudentData(item)}>Edit</button>
                                        </td>

                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default FormAndTableAPI