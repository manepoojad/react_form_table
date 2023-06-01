import logo from './logo.svg';
import './App.css';
import Card from './Card'
import React from 'react'
// import { useRef } from 'react';

// import {Table} from 'react-bootstrap'


function App1() {







  // let inputRef=useRef(null)

  // function handleInput(){
  //   console.log("function is called")
  //   // inputRef.current.value="1000"
  //   // inputRef.current.focus();
  //   inputRef.current.style.color="red"
  // }
  // const users= [
  //   {name:'Pooja', email:'pooja@123', contact:888},
  //   {name:'Seeta', email:'seetA@123', contact:999},
  //   {name:'Geeta', email:'geeta@123', contact:333},
  //   {name:'Nita', email:'neta@123', contact:666},
  // ]



  return (
    <div className="App1">



      {/* <h1>useRef in React</h1> */}
      {/* <input type='text' ref={inputRef}/>
      <button onClick={handleInput} >Handle Input</button> */}
      {/* <h1>List with Bootstrap Table</h1> */}
      {/* <Table striped variant='dark'>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>

      {
        users.map((item,i)=>
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
        </tr>

        )
      }
      </tbody>
      </Table>

       */}
    </div>
  );
}




export default App1;
