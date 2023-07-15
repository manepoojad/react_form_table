import React, { useEffect, useState } from 'react'



function ObjectValueInAlert() {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: ""
    })

    useEffect(() => {
        const user = {
            firstName: "Akshay",
            lastName: "Sharma",
            age: 28,
            address:{
                city:'Pune',
                state:'MH'
            }
        }
        console.log(user)
        delete user.age
        delete user.address.city
        console.log(user)
        



    }, [])

    const handlInputChange = (e) => {
        const { value, name, type } = e.target
        setUserDetail({
            ...userDetail,
            [name]: value
        })

    }
    console.log(userDetail)

    const handleClick = () => {
        const newUserDetail = { ...userDetail }
        const tempUserDetail = newUserDetail.firstName + " " + newUserDetail.lastName + " " + newUserDetail.dateOfBirth + " " + newUserDetail.gender
        alert(tempUserDetail)
        // console.log(newUserDetail)
    }
    return (
        <div>
            <div>
                <input
                    type='firstName'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={userDetail.firstName}
                    onChange={e => handlInputChange(e)}
                />
            </div>
            <div>
                <input
                    type='lastName'
                    name='lastName'
                    placeholder='Enter last Name'
                    value={userDetail.lastName}
                    onChange={e => handlInputChange(e)}
                />
            </div>
            <div>
                <input
                    type='date'
                    name='dateOfBirth'
                    value={userDetail.dateOfBirth}
                    onChange={e => handlInputChange(e)}
                />
            </div>
            <div>
                <label>Gender:</label>
                <label>Male</label>
                <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={userDetail.gender == "male"}
                    onChange={e => handlInputChange(e)}
                />
                <label>Female</label>
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={userDetail.gender == "female"}
                    onChange={e => handlInputChange(e)}
                />
            </div>
            <div>
                <button type='button' onClick={() => handleClick()}>Submit</button>
            </div>

        </div>
    )
}
export default ObjectValueInAlert
/**
 * const user = {
        firstName: "Akshay",
        lastName: "Sharma",
      age: 28,
    }
 */
