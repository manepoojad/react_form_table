import React, { useState } from 'react'
import './App.css'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAndTable from './container/FormAndTable';
import Practice from './container/Practice';


function App() {

   
    return (
        <div className="App">

            {/* <Practice/> */}
           <FormAndTable/>
        </div>


    );

}

export default App