import './../styles/roomPage.css'
import Footer from '../components/Footer';
import data from './roomsData.json'
import React, { useState, useEffect } from 'react';
import RoomItem from '../components/RoomItem';

const RoomPage = () => {
        const [rooms, setRooms] = useState([]);
        
        useEffect(() => {
            setRooms(data)
        }, []);
    
    return ( 
        <>
            <p className="roomPage-title">Информация о кабинетах</p>
            <div className="roomPage-container">
                {rooms.map(room => (
                    <RoomItem key={room.id} room={room}/>
                ))}
            </div>
            <Footer/>
        </>
     );
}
 
export default RoomPage;