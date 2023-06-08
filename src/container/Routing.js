import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from '../component/About'
import NavBar from '../component/NavBar';
import Page404 from '../component/Page404';
import User from '../component/User';
import Filter from '../component/Filter';
import Home from '../component/Home'

const Routing=()=>{
    return<>
    <div>
        <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/*" element={<Page404/>}/> */}
                    <Route path="/*" element={<Navigate to="/" />} />
                    <Route path="/user/:name" element={<User />} />
                    <Route path="/filter" element={<Filter />} />

                </Routes>
            </BrowserRouter>

    </div>

    </>
}
export default Routing