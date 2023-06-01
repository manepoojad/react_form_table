import { useEffect, useState } from "react";
function Card() {
    console.log("Card.js")
    let apple=5
    const [count2,setCount2]=useState(0)

    useEffect(()=>{
    console.log("card.js=>This is useEffectHook")
    },[])


    function increase(){
        console.log(apple)
        apple=apple+1;
        
        // setCount2(count2+1)
     

    }
    // console.log(count2)
    console.log("card.js=>returnStatement")
    return (
        <div>
            <h1>{count2}</h1>
            <button onClick={()=>increase()}>Click2</button>
        </div>
    );
}
export default Card;