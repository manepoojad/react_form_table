import React, { useState } from 'react'


function SimpleCalculator() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const handleInputChangeNum1 = (e) => {
        const { value, type, name } = e.target
        setNum1((Number(value)))
    }
    console.log(num1)

    const handleInputChangeNum2 = (e) => {
        const { value, type, name } = e.target
        setNum2((Number(value)))
    }
    console.log(num2)

    const handleAddition = () => {
        setResult(num1 + num2)
    }

    const handleSubtraction = () => {
        setResult(num1 - num2)
    }

    const handleMultiplication = () => {
        setResult(num1 * num2)
    }

    const handleDivision = () => {
        setResult(num1 / num2)
    }
    console.log(result)

    const handleReset = () => {
        setNum1('')
        setNum2('')
        setResult('')
    }

    return (
        <div>
            <div>
                <input
                    type='number'
                    value={num1}
                    onChange={e => handleInputChangeNum1(e)}
                />
            </div>
            <div>
                <input
                    type='number'
                    value={num2}
                    onChange={e => handleInputChangeNum2(e)}
                />
            </div><br/><br/>
            <div>
                <h1>{result}</h1>

            </div>
            <div>
                <button type='button' onClick={() => handleAddition()}>Addition</button>
                <button type='button' onClick={() => handleSubtraction()}>Subtraction</button>
                <button type='button' onClick={() => handleMultiplication()}>Multiplication</button>
                <button type='button' onClick={() => handleDivision()}>Division</button>
            </div>
            <div><button type='button' onClick={() => handleReset()}>Reset</button></div>


        </div>
    )
}
export default SimpleCalculator

/**
 *  Create a React component called SimpleCalculator. 
 * The component will take 2 number from user.
 */