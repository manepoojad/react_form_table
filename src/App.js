import React, { useState } from 'react'
import './App.css'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAndTable from './container/FormAndTable';
import Practice from './container/Practice';
import Routing from './container/Routing';
import Apifetch from './container/Apifetch';
import FormAndTableLocalStorage from './container/FormAndTableLocalStorage';
import FormAndTableAPI from './container/FormAndTableAPI';
import StateFormAndTable from './container/StateFormAndTable';
import ShowName from './reactLogic/ShowName';
import Counter from './reactLogic/Counter'
import FullNameAlert from './reactLogic/FullNameAlert';
import ShowUserDetail from './reactLogic/ShowUserDetail';
import SimpleCalculator from './reactLogic/SimpleCalculator';
import ShowUserDetailConditionalRender from './reactLogic/ShowUserDetailConditionalRender';
import SearchFilter from './reactLogic/SearchFilter';
import FormWithRef from './reactLogic/FormWithRef';
import CalculatorWithRadioButton from './reactLogic/CalculatorWithRadioButton';
import Table13Th from './reactLogic/Table13Th';
function App() {


    return (
        <div className="App">
           {/* <Routing/> */}
            {/* <Practice/> */}
            {/* <StateFormAndTable/> */}
            {/* <Apifetch/> */}
            {/* <FormAndTable/> */}
            {/* <FormAndTableLocalStorage/> */}
            {/* <FormAndTableAPI/> */}
            {/* <ShowName/> */}
            {/* <Counter/> */}
            {/* <FullNameAlert/> */}
            {/* <ShowUserDetail/> */}
            {/* <SimpleCalculator/> */}
            {/* <ShowUserDetailConditionalRender/> */}
            {/* <SearchFilter/> */}
            {/* <FormWithRef/> */}
            {/* <CalculatorWithRadioButton/> */}
            <Table13Th/>
            
        </div>


    );

}

export default App