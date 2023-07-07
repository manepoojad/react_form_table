import React, { useState } from 'react'

function ShowUserDetail() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [isShowText, setIsShowText] = useState('')

    const handleInputChangeFirstName = (e) => {
        const { value, name, type } = e.target
        setFirstName(value)
    }
    console.log(firstName)

    const handleInputChangeMiddleName = (e) => {
        const { value, name, type } = e.target
        setMiddleName(value)
    }
    console.log(middleName)

    const handleInputChangeLastName = (e) => {
        const { value, name, type } = e.target
        setLastName(value)
    }
    console.log(lastName)

    const handleShowFirstName = () => {
        setIsShowText(firstName)
    }

    const handleShowMiddleName = () => {
        setIsShowText(middleName)
    }

    const handleShowLastName = () => {
        setIsShowText(lastName)
    }

    const handleInputChangeFullName = () => {
        const fullName = `${firstName} ${middleName} ${lastName}`
        console.log(fullName)
        setIsShowText(fullName)
    }

    const handleClearAllInputField = () => {
        setFirstName('')
        setLastName('')
        setMiddleName('')
        setIsShowText('')
    }





    return (
        <div>
            <div>
                <input
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={e => handleInputChangeFirstName(e)}
                />
            </div>
            <div>

                <input
                    type='text'
                    name='middleName'
                    placeholder='Enter Middle Name'
                    value={middleName}
                    onChange={e => handleInputChangeMiddleName(e)}
                />
            </div>
            <div>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={e => handleInputChangeLastName(e)}
                />
            </div>
            <h1>{isShowText}</h1>
            <button type='button' onClick={() => handleShowFirstName()}>Show First Name</button>
            <button type='button' onClick={() => handleShowMiddleName()}>Show Middle Name</button>
            <button type='button' onClick={() => handleShowLastName()}>Show Last Name</button>
            <button type='button' onClick={() => handleInputChangeFullName()}>Show FullName</button>
            <button type='button' onClick={() => handleClearAllInputField()}>Clear</button>
        </div>

    )
}
export default ShowUserDetail

/**
 * Create a React component called ShowUserDetail.
 *  The component will take first name, last name, middle name from user.
 *  Component have a button labeled show first name, 
 * show middle name, show last name & show full name. 
 * If user click on button having label show first name 
 * it should be display first name & 
 * if user click on button having lable last name
 *  then it should be display last name etc.... & Component have clear button
 *  if user click on it then clear input field.
 */