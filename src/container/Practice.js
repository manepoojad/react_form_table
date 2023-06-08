import React from 'react'

function Practice() {
    const removeSpecificIndexItemFromArray = () => {
        const testList = [10, 15, 40, 8, 20, 35, 45]
        const arr = testList.filter((item, index) => {
            return index != 5

        })
        console.log(arr)
    }
    removeSpecificIndexItemFromArray()


    return (
        <div>
            <h1>Hello</h1>

        </div>
    )
}

export default Practice