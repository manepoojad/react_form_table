import React, { useEffect, useState } from 'react'

function ShowUserDetailConditionalRender() {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        middleName: "",
        lastName: ""
    })

    const [needToShow, setNeedToShow] = useState('')

    const handleInputChange = (e) => {
        const { value, type, name } = e.target
        setUserDetail({
            ...userDetail,
            [name]: value
        })
        setNeedToShow('')

    }
    console.log(userDetail)

    const handleToShow = (toShow) => {
        setNeedToShow(toShow)

    }
    console.log(needToShow)

    const handleClearAll = () => {
        setUserDetail({
            firstName: "",
            middleName: "",
            lastName: ""
        })

        setNeedToShow('')
    }





    return (
        <div>
            <div>
                <input
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={userDetail.firstName}
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <input
                    type='text'
                    name='middleName'
                    placeholder='Enter Middle Name'
                    value={userDetail.middleName}
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={userDetail.lastName}
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                {
                    needToShow == 'first_name' &&
                    <h2>{userDetail.firstName}</h2>
                }

                {
                    needToShow == 'middle_name' &&
                    <h2>{userDetail.middleName}</h2>
                }

                {
                    needToShow == 'last_name' ?
                        <h2>{userDetail.lastName}</h2>
                        :
                        null

                }

                {
                    needToShow == 'full_name' ?
                        <h2>{`${userDetail.firstName} ${userDetail.middleName} ${userDetail.lastName}`}</h2>
                        :
                        null

                }
            </div>
            <div>
                <button type='button' onClick={() => handleToShow('first_name')}>Show First Name</button>
                <button type='button' onClick={() => handleToShow('middle_name')}>Show Middle Name</button>
                <button type='button' onClick={() => handleToShow('last_name')}>Show Last Name</button>
                <button type='button' onClick={() => handleToShow('full_name')}>Show Full Name</button>
                <br /><br />
                <button type='button' onClick={() => handleClearAll()}>Clear</button>
            </div>
        </div>
    )
}
export default ShowUserDetailConditionalRender