/**
 * @description 
 * wright a function which takes argument as a firstname,middlename and 
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
const raplaceSubstringFromString = () => {
    const testString = "This is test string from test language. test word is important"
    let result = testString.replaceAll("test", "Bharat")
    // let result=testString.replace("test","Bharat")
    let result1 = testString.replace(" is", " Pooja")
    console.log(result)
    console.log(result1)
}

raplaceSubstringFromString()



/**
 * @description
 *Write a function which takes parameter as a number and
  return is it even/odd number and print it
 */
const isItoddEvenNumber = (number) => {
    if (number % 2 == 0) {
        return ('Even Number')
    }
    else {
        return ('Odd Number')
    }
}
const isOddOrEven = isItoddEvenNumber(2)
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
    let lessThanTwenty = testList.filter((number) => {
        if (number >= 20) {
            return true
        }
        // else{
        //     return false
        // }
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
const removeObjectWithId = (studentList, id) => {
    const temArray = studentList.filter((obj) => {
        if (obj.id == 4) {
            return false
        }
        else {
            return true
        }

    })

    return temArray
}
const studentList = [
    { id: 1, firstName: "Pooja", lastName: "Mane" },
    { id: 2, firstName: "Geeta", lastName: "Sonwane" },
    { id: 3, firstName: "Neha", lastName: "Yadav" },
    { id: 4, firstName: "Sarita", lastName: "Patil" },
    { id: 10, firstName: "Kajal", lastName: "Jadhav" },
]
const newArr = removeObjectWithId(studentList, 4)
console.log(newArr)





/**
 * @description 
 * write a logic which add 2 in each item & create a new array and print it.(use map method)
 */
const addTwoInEachItemOfArray = () => {
    const number = [1, 2, 3, 4]
    const newArr = number.map((number) => {
        const result = number + 2
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
    const newArr = listOfNumber.map((number) => {
        const result = number + 2
        return result

    })

    console.log(newArr)
    return newArr

}
const additionOf2InArray = takeArgumentAsArrayAndAdd2InEachItem([1, 2, 3, 4])
console.log(additionOf2InArray)




/**
 * @description 
 * wright a program to multiply array item by 3.
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




/**
 * @description
 *  wright a function to print addition of all elements present in the array.
 */
const additionOfArrayitem = () => {
    const numberList = [5, 8, 15, 20, 2]
    let sum = 0
    numberList.forEach(item => {

        sum += item
    })
    console.log(sum)

}
additionOfArrayitem()




/**
 * @description
 * write a function which contin logic to print object key and values
const testObject = {
   firstName: "Pooja",
   middleName: "Devidas",
   lastName: "Mane"
}
 */
const getObjectKeyAndValues = () => {
    const testObject = {
        firstName: "Pooja",
        middleName: "Devidas",
        lastName: "Mane"
    }
    // const value=testObject["firstName"]
    for (let key in testObject) {
        let text = testObject[key]
        console.log(key)
        console.log(text)
    }
    console.log(value)

}
getObjectKeyAndValues()




/**
 * @description
 *  wright a program to create a user object which has initial property 1st Name and last name.
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
    user.middleName = 'Devidas'

    user.academicInformation = {
        sscSchoolName: "xyz"
    }
    user.academicInformation.hscClgName = "Deogiri"
    console.log(user)

}
