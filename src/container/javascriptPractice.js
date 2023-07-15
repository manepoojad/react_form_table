import { useEffect } from "react"

/**
 * @description 
 * write a function which takes argument as a firstname,middlename and 
   lastname,and returns fullname and print it.
 */
const getFullname = (firstName, middleName, lastName) => {
    return firstName + " " + middleName + " " + lastName
}
let fullname = getFullname("Pooja", "Devidas", "Mane")
console.log(fullname)



/**
* @description
* function logic to replace a substring from string
* const testString = "This is test string from test language. test word is important"
* replace "test" with "Bharat"
* replace "is" with "Pooja" 
*/
const replaceSubstringFromString = () => {
    const testString = "This is test string from test language. test word is important"
    let result = testString.replaceAll("test", "Bharat")
    // let result=testString.replace("test","Bharat")
    let result1 = testString.replace(" is", " Pooja")
    console.log(result)
    console.log(result1)
}

replaceSubstringFromString()



/**
 * @description
 *Write a function which takes parameter as a number and
  return is it even/odd number and print it
 */
const isItOddEvenNumber = (number) => {
    if (number % 2 == 0) {
        return ('Even Number')
    }
    else {
        return ('Odd Number')
    }
}
const isOddOrEven = isItOddEvenNumber(2)
console.log(isOddOrEven)



/**
 * @description
 * Write a function which print a 17th table
 */
const table = () => {
    for (let i = 17; i <= 170; i = i + 17) {
        console.log(i)
    }
    // OR 
    let number = 17
    for (let i = 1; i <= 10; i++) {
        const result = number * i
        console.log(result)
    }
}
table()


/**
* @description
* function logic to remove index 5 item from array.
* const testList= [ 10, 15, 40, 8,20,35 ,45]
*/
const removeSpecificIndexItemFromArray = () => {
    const testList = [10, 15, 40, 8, 20, 35, 45]
    const arr = testList.filter((item, index) => {
        return index != 5

    })
    console.log(arr)
}
removeSpecificIndexItemFromArray()



/**
* @description
* function logic to filter number from array which is less than 20
* const testList= [ 10, 15, 40, 8,20,35 ,45]
*/
    const filterNumberFromArray = () => {
        const testList = [10, 15, 40, 8, 45, null]
        const lessThanTwenty = testList.filter((item,index) => {
            if (item < 20) {
                return true
            }

            // if(!(number<20)){
            //     return true

            // }
            

        })
        console.log(lessThanTwenty)

    }


filterNumberFromArray()



/**
 * @description 
 * write a logic which remove the object having id 4 from the given array of object (using filter)
   const studentList=[
                       {id:1,firstName:"Pooja",lastName:"Mane"},
                       {id:2,firstName:"Geeta",lastName:"Sonwane"},
                       {id:3,firstName:"Neha",lastName:"Yadav"},
                       {id:4,firstName:"Sarita",lastName:"Patil"},
                       {id:10,firstName:"Kajal",lastName:"Jadhav"},
   ] 
 */
const studentList = [
    { id: 1, firstName: "Pooja", lastName: "Mane" },
    { id: 2, firstName: "Geeta", lastName: "Sonwane" },
    { id: 3, firstName: "Neha", lastName: "Yadav" },
    { id: 4, firstName: "Sarita", lastName: "Patil" },
    { id: 10, firstName: "Kajal", lastName: "Jadhav" },
]
const removeObjectWithId = () => {
    const temArray = studentList.filter((item, index) => {
        if (item.id == 4) {
            return false
        }
        else {
            return true
        }

    })
    console.log(temArray)
}
removeObjectWithId()

/**
 * @description 
 * write a logic which add 2 in each item & create a new array and print it.(use map method)
 */
const addTwoInEachItemOfArray = () => {
    const number = [1, 2, 3, 4]
    const newArr = number.map((item, index) => {
        const result = item + 2
        return result
        // return number + 2
    })

    console.log(newArr)
}
addTwoInEachItemOfArray()



/**
 * @description 
 * Write a function which takes argument/parameter as array of 
   number and add 2 in each item & return new array & print it (use map method)
 */
const takeArgumentAsArrayAndAdd2InEachItem = (listOfNumber) => {
    const newArr = listOfNumber.map((item, index) => {
        const result = item + 2
        return result

    })

    console.log(newArr)
    return newArr

}
const additionOf2InArray = takeArgumentAsArrayAndAdd2InEachItem([1, 2, 3, 4])
console.log(additionOf2InArray)




/**
 * @description 
 * write a program to multiply array item by 3.
 */
const multiplyArrayItem = () => {
    const number = [1, 2, 3, 4]
    let arr = []
    for (let i = 0; i < number.length; i++) {
        const item = number[i]
        let newItem = 3 * item
        arr.push(newItem)

    }
    console.log(arr)
}
multiplyArrayItem()
//OR//
const number = [1, 2, 3, 4]
const multiplyArrayItem1 = () => {
    const arr = number.map((item, index) => {
        return item * 3
    })
    console.log(arr)
}
multiplyArrayItem1()


/**
 * @description
 *  write a function to print addition of all elements present in the array.
 */
const numberList1 = [5, 8, 15, 20, 2]
const additionOfArrayitem = () => {
    let sum = 0
    numberList1.forEach((item, index) => {

        sum += item
    })
    console.log(sum)

}
additionOfArrayitem()




/**
 * @description
 * write a function which contain logic to print object key and values
   const testObject = {
   firstName: "Pooja",
   middleName: "Devidas",
   lastName: "Mane"
}
*/
const testObject = {
    firstName: "Pooja",
    middleName: "Devidas",
    lastName: "Mane"
}
const getObjectKeyAndValues = () => {
    for (let key in testObject) {
        let text = testObject[key]
        console.log(key)
        console.log(text)
    }

}
getObjectKeyAndValues()

/**
 * @description
 *  write a program to create a user object which has initial property 1st Name and last name.
 * add a new middle name property in object.
 * add a new academic information object which has initial value SSc school name 
 * add a academic information with HSC clg name 
*/
const handleUserObject = () => {
    const user = {
        firstName: "Pooja",
        lastName: "Mane",

    }
    // user['middleName']='Devidas'
    //OR
    user.middleName = 'Devidas' //
    user.academicInformation = {
        sscSchoolName: "xyz"
    }
    user.academicInformation.hscClgName = "Deogiri"
    console.log(user)

}
handleUserObject()




/**
 * @description
 * Print integers 1-to-20, but print “Fizz” if an integer is divisible by three, 
   “Buzz” if an integer is divisible by five, and 
   “FizzBuzz” if an integer is divisible by both three and five.
*/
const printIntegers = () => {
    for (let i = 1; i <= 20; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(i + " Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }
        else {
            console.log(i);
        }

    }
}
printIntegers()

/**
 * @description
 * find smallest number in test arrray
*/
const test = [4, 6, 9, 3, 7, 9, 3, 11];
let smallestnum = test[0]
for (let i = 0; i < test.length; i++) {
    if (test[i] < smallestnum) {
        smallestnum = test[i]
    }
}
console.log(smallestnum)

/**
 * @description
 * const person={
        work:{title:'Developer'
            office:{
                company:{companyName:"Eteva"}
    }
        }
            }
*/
useEffect(() => {
    const newPerson = { ...person }//Object Manupulation method
    newPerson.work.office.company.companyName = 'Eteva'
    setPerson(newPerson)
}, [])
console.log(person)

/**
 * @description
 * numberList = [4, 6, 9, 1, 3, 7, 9, 3, 11]
 * Q1. find prime number from list 
 * Q2. find the largest and smallest number
 * Q3. add '99' at location 4 & remove element at location 5 (location means index)(using loop)
 * Q4. make Array which has duplicate element
 * Q5. sort array with acending order(using sort)
 * Q6. sort array with decending order(using sort)
 * Q6. sort array with acending order(using forloop)
 * Q7. sort array with decending order(using forloop)
*/

//1
const numberList = [4, 6, 9, 1, 3, 7, 9, 3, 11]
const primeNumberList = numberList.filter((item, index) => {
    if (item < 2) {
        return false;
    }
    else {
        for (let i = 2; i < item; i++) {
            if (item % i == 0) {
                return false;
            }
        }
        return true;
    }

})
console.log("primeNumberList", primeNumberList)

//2
let smallestNumber = numberList[0]
let largestNumber = numberList[0]
numberList.forEach((item, index) => {
    debugger
    if (item < smallestNumber) {
        smallestNumber = item
    }
    if (item > largestNumber) {
        largestNumber = item

    }
})
console.log(smallestNumber)
console.log(largestNumber)

// OR //
const newSmallestNumber = Math.min(...numberList)
const newlargestNumber = Math.max(...numberList)
console.log(newSmallestNumber)
console.log(newlargestNumber)

//3 

const updatedList = []

for (let i = 0; i < numberList.length; i++) {
    if (i === 4) {
        updatedList.push(99)
    }
    else if (i !== 5) {
        updatedList.push(numberList[i])
    }
}
console.log(updatedList)

//4
useEffect(() => {
    const arr = [4, 6, 9, 1, 3, 7, 9, 3, 11];
    const itemObject = {};
    const duplicateValueList = [];
    arr.forEach((item) => {
        if (itemObject[item] === undefined) { // itemObject.4
            itemObject[item] = 1;
        } else {
            if (itemObject[item] === 1) {
                duplicateValueList.push(item);
            }
            itemObject[item]++;
        }
    });

    console.log(duplicateValueList); // Output: [9, 3]


}, [])

//5
const arr = [4, 6, 9, 1, 3, 7, 9, 3, 11];
arr.sort((a, b) => (a - b))
console.log(arr)

//6
const arr1 = [4, 6, 9, 1, 3, 7, 9, 3, 11];
arr1.sort((a, b) => (b - a))
console.log(arr1)

//7
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i = -1;
    }
}
console.log(arr)

//8
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i = -1;
    }
}
arr.reverse()
console.log(arr)


/**
 * @description
 * 
 */


/**
 *@description
 * let staffs = [
     { name: "Susan", age: 14, salary: 100 },
     { name: "Daniel", age: 16, salary: 120 },
     { name: "Bruno", age: 56, salary: 400 },
     { name: "Jacob", age: 15, salary: 110 },
     { name: "Sam", age: 64, salary: 500 },
     { name: "Dave", age: 56, salary: 380 },
     { name: "Neils", age: 65, salary: 540 }
   ];
   
   Q1. using map show array of all names
   Q2. using filter show salary greater than 500
   Q3. using reduce show sum of salary 
   Q4. change Dave salary to 390
   Q5. change 3rd no. staff name to sachin
   Q6. remove Daniel from staff list and update the Jacob age to 20
   Q7. remove Daniel from staff list and update the Jacob age to 20 
       and after sam add new staff which has name sachin ,age=27,salary 200
       and before Dave add new staff which has name Bharat ,age 28,salary 350
*/

// 1 
let staffs = [
    { name: "Susan", age: 14, salary: 100 },
    { name: "Daniel", age: 16, salary: 120 },
    { name: "Bruno", age: 56, salary: 400 },
    { name: "Jacob", age: 15, salary: 110 },
    { name: "Sam", age: 64, salary: 500 },
    { name: "Dave", age: 56, salary: 380 },
    { name: "Neils", age: 65, salary: 540 }
];

const newAllStaffNameArr = staffs.map((item, index) => {
    debugger
    return item.name

})
console.log(newAllStaffNameArr)

//2

const newStaffSalaryArr = staffs.filter((item, index) => {
    if (item.salary > 500) {
        return true
    }
    else {
        return false
    }

})
console.log(newStaffSalaryArr)

//3
const sumOfStaffSalary = staffs.reduce((total, item, index) => {
    debugger
    total += item.salary
    return total

}, 0)
console.log(sumOfStaffSalary)
// OR//

let salary = 0
staffs.forEach((item) => {
    totalStaffSalary = salary + item.salary
})
console.log(totalStaffSalary)

//4
const updateDaveSalaryArr = staffs.map((item, index) => {
    if (item.name == 'Dave') {
        const newItem = { ...item }
        newItem.salary = 390
        return newItem
    }
    else {
        return item
    }
})
console.log(updateDaveSalaryArr)

//5
const updateStaffName = staffs.map((item, index) => {
    if (index == 2) {
        const newItem = { ...item }
        newItem.name = 'Sachin'
        return newItem
    }
    else {
        return item
    }
})
console.log(updateStaffName)

//6
const removeStaffMember = staffs.filter((item, index) => {
    if (item.name == 'Daniel') {
        return false
    }
    else {
        return true
    }
})
const removeStaffMemberAndUpdateAge = removeStaffMember.map((item, index) => {
    if (item.name == 'Jacob') {
        const newObj = { ...item }
        newObj.age = 20
        return newObj
    }
    else {
        return item
    }
})
console.log(removeStaffMemberAndUpdateAge)

//7
let removeAndUpdateNameAge = []
staffs.forEach((item, index) => {
    if (item.name == 'Daniel') {

    }
    else if (item.name == "Jacob") {
        const newItem = { ...item }
        newItem.age = 20
        removeAndUpdateNameAge.push(newItem)
    }
    else if (item.name == 'Sam') {
        removeAndUpdateNameAge.push(item)
        const newObje = {
            name: "Sachin",
            age: 27,
            salary: 200
        }
        removeAndUpdateNameAge.push(newObje)
    }
    else if (item.name == "Dave") {
        const newTempObj = {
            name: "Bharat",
            age: 28,
            salary: 350
        }
        removeAndUpdateNameAge.push(newTempObj)
        removeAndUpdateNameAge.push(item)
    }
    else {
        removeAndUpdateNameAge.push(item)
    }
})
console.log(removeAndUpdateNameAge)





/**
 *  @description
 * create a controlled component form which has input field firstname and lastname and gender which has separate state
*/
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [gender, setGender] = useState('')
const [langauges, setLangauges] = useState([])
const [course, setCourse] = useState('')

const handleInputChange = (e) => {
    debugger
    const { name, value, type } = e.target
    if (name == 'firstName') {
        setFirstName(value)
    }
    else if (name == 'lastName') {
        setLastName(value)
    }
    else if (name == 'gender') {
        setGender(value)
    }
    else if (name == 'course') {
        setCourse(value)
    }
    else {
        if (type == 'checkbox') {
            const checked = e.target.checked
            let newValue = [...langauges]

            if (checked) {
                newValue.push(value)
            }
            else {
                newValue = newValue.filter(item => item !== value)
            }
            setLangauges(newValue)
        }


    }
}
console.log(firstName)
console.log(lastName)
console.log(gender)
console.log(langauges)
console.log(course)

const handleSubmit = () => {
    const user = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        langauges: langauges,
        course: course
    }
    console.log(user)

    //reset form
    setFirstName('')
    setLastName('')
    setGender('')
    setLangauges('')
    setCourse('')
}

return (
    <div>
        <form>
            <div>
                <label>First Name:</label>
                <input
                    type='text'
                    name='firstName'
                    value={firstName}
                    placeholder='Enter your First Name'
                    onChange={e => handleInputChange(e)}
                // onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    placeholder='Enter your Last Name'
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <label>Gender:</label>
                <label>Male</label>
                <input
                    type='radio'
                    name='gender'
                    value="male"
                    checked={gender == 'male'}
                    onChange={e => handleInputChange(e)}
                />
                <label>Female</label>
                <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={gender == 'female'}
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <label>Langauges:</label>
                <label>English</label>
                <input
                    type='checkbox'
                    name='langauges'
                    value='english'
                    checked={langauges.includes('english')}
                    onChange={e => handleInputChange(e)}
                />
                <label>Marathi</label>
                <input
                    type='checkbox'
                    name='langauges'
                    value='marathi'
                    checked={langauges.includes('marathi')}
                    onChange={e => handleInputChange(e)}
                />
                <label>Hindi</label>
                <input
                    type='checkbox'
                    name='langauges'
                    value='hindi'
                    checked={langauges.includes('hindi')}
                    onChange={e => handleInputChange(e)}
                />
            </div>
            <div>
                <label>Coursr Applied for:</label>
                <select
                    name='course'
                    value={course}
                    onChange={e => handleInputChange(e)}
                >
                    <option>Select</option>
                    <option>Java</option>
                    <option>Python</option>
                </select>
            </div>
            <div>
                <button type='button' onClick={() => handleSubmit()}>Submit</button>
            </div>
        </form>
    </div>
)