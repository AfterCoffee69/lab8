import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
//import data from './scheduleData.json'
import './../styles/schedulePage.css'
import ScheduleItem from './../components/ScheduleItem'

const SchedulePage = () => {
    const [schedules, setSchedules] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/schedules')
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error('Ошибка при выполнении запроса');
        })
        .then(data => {
            setSchedules(data)
        })
        .catch(error => {
            console.error('Ошибка при выполнении запроса:', error);
        });
    }, []);


    return ( 
        <>
            <div className="schedule_page-container">
                <table>
                    <thead className='schedule_page-thed'>
                        <tr>
                            <th>Кабинет</th>
                            <th>Врач</th>
                            <th>Дата</th>
                            <th>Время</th>
                            <th>Статус работы</th>
                        </tr>
                        </thead>
                        <tbody className='schedule_page-tbody'>
                            {schedules.map(schedule => (
                                <ScheduleItem key={schedule.id} schedule={schedule}/>
                            ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </>
     );
}
 
export default SchedulePage;