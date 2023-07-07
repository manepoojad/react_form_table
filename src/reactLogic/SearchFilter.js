import React, { useState } from 'react'


function SearchFilter() {
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ];

    const [searchQuery, setSearchQuery] = useState('')
    const [filterList, setFilterList] = useState(list)
    console.log(filterList)

    const handleInputChange = (e) => {
        const { value, type, name } = e.target
        setSearchQuery(value)

        const newFilterArr = list.filter((item, index) => {
            const lowerCaseItem = item.toLowerCase()
            const valueLowerCase = value.toLowerCase()
            const isSearchValueInclude = lowerCaseItem.includes(valueLowerCase)
            if (isSearchValueInclude) {
                return true
            }
            else {
                return false
            }
        })

        setFilterList(newFilterArr)
    }
    console.log(filterList)




    return (
        <div>
            <input
                type='text'
                value={searchQuery}
                onChange={e => handleInputChange(e)}
            />
            <div>
                <ul>
                    {
                        filterList.map((item, index) => {
                            // console.log(item)
                            return (
                                <li key={index}>
                                    {item}
                                </li>
                            )

                        })
                    }
                </ul>
            </div>

        </div>

    )
}
export default SearchFilter
/**
 * Build a simple search filter functionality to display a filtered list based on the search query entered by the user.
const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
 */