import React, { useState } from 'react'


function CalculatorWithRadioButton() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operations, setOperations] = useState('')

    const handleInputChange = (e) => {
        debugger
        const { value, type, name } = e.target
        if (name == 'num1') {
            setNum1(value)
        }
        else if (name == "num2") {
            setNum2(value)
        }
        else if (name == "operations") {
            setOperations(value)
        }
    }
    console.log(num1)
    console.log(num2)
    console.log(operations)

    const handleClick = () => {


        if (operations == "addition") {
            const additionOfTwoNumber = Number(num1) + Number(num2)
            const text = `Addition of ${num1} & ${num2} is ${additionOfTwoNumber}`
            alert(text)

        }
        else if (operations == "subtraction") {
            const subtractionOfTwoNumber = Number(num1) - Number(num2)
            const text = `Subtraction of ${num1} & ${num2} is ${subtractionOfTwoNumber}`
            alert(text)
        }
        else if (operations == "division") {
            const divisionOfTwoNumber = Number(num1) / Number(num2)
            const text = `Addition of ${num1} & ${num2} is ${divisionOfTwoNumber}`
            alert(text)

        }
        else {
            const multiplicationOfTwoNumber = Number(num1) * Number(num2)
            const text = `Addition of ${num1} & ${num2} is ${multiplicationOfTwoNumber}`
            alert(text)

        }
    }
    const handleClear = () => {
        setNum1('')
        setNum2('')
        setOperations('')
    }

    return (
        <div>
            <div>
                <input
                    type='number'
                    name='num1'
                    placeholder='Enter Number'
                    value={num1}
                    onChange={(e) => handleInputChange(e)}
                />
            </div><br />
            <div>
                <input
                    type='number'
                    name='num2'
                    placeholder='Enter Number'
                    value={num2}
                    onChange={(e) => handleInputChange(e)}
                />
            </div><br />
            <div>
                <label>Operations:</label>
                <label>Addition</label>
                <input
                    type='radio'
                    name='operations'
                    value="addition"
                    checked={operations == "addition"}
                    onChange={(e) => handleInputChange(e)}
                />
                <label>Subtraction</label>
                <input
                    type='radio'
                    name='operations'
                    value="subtraction"
                    checked={operations == "subtraction"}
                    onChange={(e) => handleInputChange(e)}
                />
                <label>Division</label>
                <input
                    type='radio'
                    name='operations'
                    value="division"
                    checked={operations == "division"}
                    onChange={(e) => handleInputChange(e)}
                />
                <label>Multipliction</label>
                <input
                    type='radio'
                    name='operations'
                    value="multiplication"
                    checked={operations == "multiplication"}
                    onChange={(e) => handleInputChange(e)}
                />
            </div><br />
            <div>
                <button type='button' onClick={() => handleClick()}>Result</button>
                <button type='button' onClick={() => handleClear()}>Reset</button>


            </div>

        </div>
    )
}
export default CalculatorWithRadioButton