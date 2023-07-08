import React, { useState } from 'react'


function FormWithValidation() {
    const [studentDetail, setStudentDetail] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    })

    const [studentDetailError, setStudentDetailError] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
    })

    const handleInputChange = (e) => {
        const { value, type, name } = e.target
        setStudentDetail({
            ...studentDetail,
            [name]: value
        })
        setStudentDetailError({
            firstName: "",
            password: "",
            confirmPassword: ""
        })

    }
    console.log(studentDetail)

    const handleFormSubmit = () => {
        const { firstName, lastName, password, confirmPassword } = studentDetail

        if (password.length < 5) {
            // alert("Enter valid password")
            setStudentDetailError({
                ...studentDetailError,
                password: "Enter valid password"
            })
        }
        else if (password !== confirmPassword) {
            // alert("password & confirmpassword are not matched")
            setStudentDetailError({
                ...studentDetailError,
                confirmPassword: "password & confirmpassword are not matched"
            })
        }
        else if (firstName.length < 3) {
            // alert("Enter valid FirstName")
            setStudentDetailError({
                ...studentDetailError,
                firstName: "Enter valid FirstName"
            })
        }
        else {
            alert("user has been created successfully")
            console.log(studentDetail)
        }

    }


    return (
        <div>
            <div>
                <label>First Name:</label>
                <input
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={studentDetail.firstName}
                    onChange={event => handleInputChange(event)}
                />
                {
                    studentDetailError.firstName ?
                        <div style={{ color: "red" }}>{studentDetailError.firstName}</div>
                        :
                        null
                }

            </div>

            <div>
                <label>Last Name:</label>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={studentDetail.lastName}
                    onChange={event => handleInputChange(event)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={studentDetail.password}
                    onChange={event => handleInputChange(event)}
                />

                {
                    studentDetailError.password ?
                        <div style={{ color: "red" }}>{studentDetailError.password}</div>
                        :
                        null
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Enter Password'
                    value={studentDetail.confirmPassword}
                    onChange={event => handleInputChange(event)}
                />
                {
                    studentDetailError.confirmPassword ?
                        <div style={{ color: "red" }}>{studentDetailError.confirmPassword}</div>
                        :
                        null
                }
            </div>
            <div>
                <button onClick={() => handleFormSubmit()}>Submit</button>
            </div>





        </div>
    )
}
export default FormWithValidation