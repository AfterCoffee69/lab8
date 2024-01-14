import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/header.css';
import Home from './../pages/Home'
import Doctors from '../pages/Doctors';
import SchedulePage from '../pages/SchedulePage';
import RoomPage from './../pages/RoomPage'
import QuestionsPage from '../pages/QuestionsPage';

const Header = () => {
    return ( 
        <>
            <Router>
            <nav className="navbar navbar-expand-lg  header-container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Регистратура</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link " active aria-current="page" href="/">Главная</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/doctors">Врачи</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/schedules">График</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/rooms'>Кабинеты</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href='/questions'>FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exect path='/Doctors' element={<Doctors/>}/>
                    <Route exect path='/schedules' element={<SchedulePage/>}/>
                    <Route exect path='/rooms' element={<RoomPage/>}/> 
                    <Route exect path='/questions' element={<QuestionsPage/>}/> 
                </Routes>
            </Router>
        </>
        
     );
}
 
export default Header;