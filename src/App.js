import React, { useState } from 'react'
import './App.css'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAndTable from './container/FormAndTable';
import Practice from './container/Practice';
import Routing from './container/Routing';
import Apifetch from './container/Apifetch';

function App() {


    return (
        <div className="App">
           {/* <Routing/> */}
            {/* <Practice/> */}

            <Apifetch/>
            {/* <FormAndTable/> */}
        </div>


    );

}

export default App