
import react, { useState } from 'react'
import { Table } from 'react-bootstrap'


function TableWithSearch() {
  const userData = [
    {
      "firstName": "Aarav",
      "lastName": "Verma",
      "middleName": "Kumar",
      "hobby": "Photography",
      "profilePhoto": "https://thumbs.dreamstime.com/b/portrait-years-old-east-indian-american-teenager-new-york-city-young-male-college-student-wearing-blue-short-sleeve-shirt-184522964.jpg"
    },
    {
      "firstName": "Aditi",
      "lastName": "Gupta",
      "middleName": "Singh",
      "hobby": "Reading",
      "profilePhoto": "https://c8.alamy.com/comp/BG5BDG/attractive-indian-teenager-girl-age-aged-18-years-old-wearing-a-pink-BG5BDG.jpg"
    },
    {
      "firstName": "Rahul",
      "lastName": "Sharma",
      "middleName": "Kumar",
      "hobby": "Cooking",
      "profilePhoto": "https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "firstName": "Priya",
      "lastName": "Patel",
      "middleName": "Bose",
      "hobby": "Painting",
      "profilePhoto": "https://image1.masterfile.com/getImage/NjE0LTAyMzkzNjIwZW4uMDAwMDAwMDA=AHjKM9/614-02393620en_Masterfile.jpg"
    },
    {
      "firstName": "Vikram",
      "lastName": "Singh",
      "middleName": "Rathore",
      "hobby": "Playing Football",
      "profilePhoto": "https://example.com/profiles/vikram_singh.jpg"
    },
    {
      "firstName": "Neha",
      "lastName": "Sharma",
      "middleName": "Gupta",
      "hobby": "Dancing",
      "profilePhoto": "https://image1.masterfile.com/getImage/NjMwLTAzNDc5ODE4ZW4uMDAwMDAwMDA=ABhMsm/630-03479818en_Masterfile.jpg"
    },
    {
      "firstName": "Raj",
      "lastName": "Malhotra",
      "middleName": "Khanna",
      "hobby": "Gardening",
      "profilePhoto": "https://images.unsplash.com/photo-1609081524998-a1163e2d44cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwYm95fGVufDB8fDB8fHww&w=1000&q=80"
    },
    {
      "firstName": "Anaya",
      "lastName": "Joshi",
      "middleName": "Sharma",
      "hobby": "Writing",
      "profilePhoto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOJ2Lc9yUn3AdiNcVdCPT-jHyA7DqjoxQ8Q&usqp=CAU"
    },
    {
      "firstName": "Arjun",
      "lastName": "Mehta",
      "middleName": "Rajput",
      "hobby": "Playing Guitar",
      "profilePhoto": "https://hairstylecamp.com/wp-content/uploads/indian-boys-hairstyles-1.jpg.webp"
    },
    {
      "firstName": "Kavya",
      "lastName": "Sinha",
      "middleName": "Verma",
      "hobby": "Travelling",
      "profilePhoto": "https://assets.entrepreneur.com/content/3x2/2000/1675448878-63d8c8320a08ae0018a61f89copy.jpg"
    }
  ]

  const [userList, setUserList] = useState([...userData])
  const [selectUser, setSelectUser] = useState(null)
  const [filterTxt, setFilterTxt] = useState('')


  const handleSelectUser = (selectUser) => {
    setSelectUser(selectUser)
  }

  const handleResetSelectedUserData = () => {
    setSelectUser(null)
  }



  const handleInputChange = (e) => {
    const { value, name, type } = e.target
    setSelectUser(null)
    setFilterTxt(value)
    const typeTextToLowerCase = value.toLowerCase()


    const arr = userData.filter((item, index) => {
      const itemString = `${item.firstName} ${item.lastName} ${item.middleName} ${item.hobby}`
      const itemStringToLowerCase = itemString.toLowerCase()
      const isInclude = itemStringToLowerCase.includes(typeTextToLowerCase)
      console.log(isInclude)
      if (isInclude) {
        return true
      }
      else {
        return false
      }
    })
    console.log(arr)
    setUserList(arr)
  }
  console.log(userList)
  return (
    <div className="App">
      <div>
        <input
          type='text'
          name='filterTxt'
          value={filterTxt}
          onChange={e => handleInputChange(e)}
        />

      </div>
      {
        selectUser ?
          <div>
            <p>First Name:{selectUser.firstName}</p>
            <p>Last Name:{selectUser.lastName}</p>
            <p>Middle Name:{selectUser.middleName}</p>
            <p>Hobby Name:{selectUser.hobby}</p>
            <p>ProfilePhoto:<img src={selectUser.profilePhoto} height={60} width={50} /></p>
            <div>
              <button onClick={() => handleResetSelectedUserData()}>Reset</button>
            </div>
          </div>
          :
          null
      }




      <div>

        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Hobby</th>
              <th>ProfilePhoto</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map((item, index) => (
                <tr key={index} >
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.middleName}</td>
                  <td>{item.hobby}</td>
                  <td><img src={item.profilePhoto} height={70} width={50} /></td>
                  <td><button type='button' onClick={(e) => handleSelectUser(item)}>Select</button></td>

                </tr>

              ))
            }

          </tbody>
        </Table>
      </div>



    </div>
  );
}

export default TableWithSearch;
