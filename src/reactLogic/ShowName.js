import React ,{useState}from 'react'

function ShowName(){
    const [paragraphText,setParagraphText]=useState('')
    const [isShowParagraph,setIsShowParagraph]=useState(false)

    const handleChange=(e)=>{
        const {name,type,value}=e.target
        console.log(value)
        setParagraphText(value)
       

    }
    console.log(paragraphText)

    const handleClick=()=>{
      setIsShowParagraph(true)

    }

    const clearInputTextAndParagraph=()=>{
        setIsShowParagraph(false)
        setParagraphText('')

    }






    return(
        <div>
            {
                isShowParagraph==true?
                <label>{paragraphText}</label>
                :
                null
            }
           
            <input
                 type='text'
                 name='paragraphText'
                 value={paragraphText}
                 onChange={e=>handleChange(e)}
                 

            />

            <button type='button' onClick={()=>handleClick()}>Click Me</button>
            <button type='button' onClick={()=>clearInputTextAndParagraph()}>Clear</button>

        </div>
    )
}
export default ShowName

/**
 * 
 */