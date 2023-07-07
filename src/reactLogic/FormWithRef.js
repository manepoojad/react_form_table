import React,{useRef} from 'react'


function FormWithRef(){
    const firstNameRef=useRef()
    const lastNameRef=useRef()


    const handleClick=()=>{
        debugger
        const firstName=firstNameRef.current.value
        const lastName=lastNameRef.current.value
        // console.log(firstName)
        const fullName=`${firstName} ${lastName}`
        alert(fullName)
        firstNameRef.current.value=""
        lastNameRef.current.value=""

    }
console.log(firstNameRef)




    return(
        <div>
            <div>
            <input
                 type='text'
                 ref={firstNameRef}

            />
            </div>
            <div>
                <input
                     type='text'
                     ref={lastNameRef}
                />

            </div>
           


            <button type='button' onClick={()=>handleClick()}>Submit</button>

        </div>
    )
}
export default FormWithRef