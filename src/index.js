import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom'
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import AddPet from './pages/AddPet';
import UpdatePet from './pages/UpdatePet';
import GetAllPets from './pages/GetAllPets';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>}>
                <Route path='/' element={<Homepage/>}></Route>
                <Route path='/add' element={<AddPet/>}></Route>
                <Route path='/edit' element={<UpdatePet/>}></Route>
                <Route path='/pets' element={<GetAllPets/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
</>
);
