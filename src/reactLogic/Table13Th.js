import React, { useState, useEffect } from 'react'


function Table13Th() {
    const [table, setTable] = useState([])

    useEffect(() => {
        const newArr = []
        for (let i = 13; i <= 130; i = i + 13) {
            console.log(i)
            newArr.push(i)
        }
        console.log(newArr)
        setTable(newArr)
    }, [])
    console.log(table)

    return (
        <div>
            {
                table && table.map((item, index) => {
                    return (
                        <p key={index}>
                            {item}
                        </p>
                    )
                })
            }

        </div>
    )
}
export default Table13Th