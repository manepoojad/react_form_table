import React, { useState } from 'react'
// import './App.css'
import '../App.css'
import { Table } from 'react-bootstrap'



function FormAndTable() {

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


    const formSubmit = () => {
        debugger

        console.log(formData)
        const newStudentList = [...studentList]
        newStudentList.push(formData)
        setStudentList(newStudentList)
        console.log(newStudentList)
        setFormData({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
            knownLanguages: [],
            address: "",
            course: ""


        })
        

    }
    const  handleRemoveItem=(clickItemIndex)=>{
         const newArr=studentList.filter((item,indx)=>{
            if(clickItemIndex==indx){
                return false
                
            }
            else{
                return true
            }
         })
         console.log(newArr)
         setStudentList(newArr)
    }

    return (
        <div className="App">
            <h2>Update Student Data</h2>
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
                        checked={formData.knownLanguages.includes("english")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Marathi</label>
                    <input
                        type="checkbox"
                        name="knownLanguages"
                        value="marathi"
                        checked={formData.knownLanguages.includes("marathi")}
                        onChange={e => handleInputChange(e)} />
                    <label>Hindi</label>
                    <input
                        type="checkbox"
                        name="knownLanguages"
                        value="hindi"
                        checked={formData.knownLanguages.includes("hindi")}
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
                    <button type='button' onClick={formSubmit}>
                        Submit
                    </button>
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
                                studentList.map((item, index) => (
                                    <tr key={index}>
                                        <td> {index + 1} </td>
                                        <td>{item.firstName}</td>
                                        <td> {item.lastName} </td>
                                        <td>{item.dateOfBirth}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.knownLanguages}</td>
                                        <td>{item.address}</td>
                                        <td>{item.course}</td>
                                        <td>
                                            <button type='button' onClick={(e)=>handleRemoveItem(index)}>Remove</button>
                                       
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </form>
        </div>


    );

}

export default FormAndTable