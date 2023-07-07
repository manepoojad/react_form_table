import React,{useState} from 'react'

function Counter(){
    const [number,setNumber]=useState(0)
    
    const handleChangeIncrease=()=>{
        const newNumber=number+1
        setNumber(newNumber)


    }

    const handleChangeDecrement=()=>{
        const newNumber=number-1
        setNumber(newNumber)
       

    }
    console.log(number)


    return(
        <div>
            <h3>{number}</h3>
            
            <button type='button' onClick={()=>handleChangeIncrease()}>Increment</button>
            <button type='button' onClick={()=>handleChangeDecrement()}>Decrement</button>

        </div>
    )
}
export default Counter
/**
 * Create a simple React component called Counter.
 *  The component should display a number, a button labeled "Increment," 
 * and a button labeled "Decrement." When the "Increment" button is clicked, 
 * the number should increase by 1, and when the "Decrement" button is clicked, 
 * the number should decrease by 1. The initial number should be set to 0.
 */