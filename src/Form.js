import React from 'react'
import { useState } from 'react'


function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        middleName: ""

    })
    
    const handleInputChange = (e) => {
        const name = e.target.name
        console.log(name)

        setFormData({
            ...formData,
            [name]: e.target.value,
        })

    }

    const formSubmit = () => {
        console.log(formData)
    }

    return (
        <div>
            <form>
                <div>
                    <input type='text' value={formData.firstName} name='firstName' onChange={e => handleInputChange(e)} />
                </div>
                <div>
                    <input type='text' value={formData.lastName} name='lastName' onChange={e => handleInputChange(e)} />
                </div>
                <div>
                    <input type='text' value={formData.middleName} name='middleName' onChange={e => handleInputChange(e)} />
                </div>
                <div>
                    <button type='button' onClick={formSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
