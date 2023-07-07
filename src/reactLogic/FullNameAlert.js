import React,{useState}from 'react'

function FullNameAlert(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')

    const handleInputChangeFirstName=(e)=>{
        const {value,type,name}=e.target
        setFirstName(value)

    }
   

    const handleInputChangeLastName=(e)=>{
        const {value,type,name}=e.target
        setLastName(value)
    }


    const handleClickFullName=()=>{
        const fullName=`${firstName} ${lastName}`
        alert(fullName)
    }
    return(
        <div>
            <input
                  type='text'
                  name='firstName'
                  placeholder='Enter First Name'
                  value={firstName}
                  onChange={e=>handleInputChangeFirstName(e)}
            /><br/><br/>

            <input
                 type='text'
                 name='lastName'
                 placeholder='Enter Last Name'
                 value={lastName}
                 onChange={e=>handleInputChangeLastName(e)}

            />


            <button type='button' onClick={()=>handleClickFullName()}>Show Full Name</button>

        </div>
    )
}
export default FullNameAlert

/**
 *  Create a React FullNameAlert component.
 *  The component will take first name & last name from user.
 *  When user click on button having label "Show full name" 
 *  then full name should be shown in alert.
 */