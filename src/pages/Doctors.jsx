import React, { useState, useEffect } from 'react';
import DoctorsItem from '../components/DoctorsItem';
import Footer from '../components/Footer';
import doctorsData from './doctorsData.json'
import './../styles/doctors.css'
import { Button } from 'bootstrap';


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/doctors')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Ошибка при выполнении запроса.');
      })
      .then(data => {
        setDoctors(data)
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }, []);

  const downloadFile = async (format) => {
    try {
      let acceptHeader = '';

      if (format === 'html') {
        acceptHeader = 'text/html';
      } else {
        acceptHeader = `application/${format}`;
      }

      const response = await fetch('http://localhost:3000/api/formattedData', {
        headers: {
          Accept: acceptHeader,
        },
      });

      const content = await response.text();
      const fileName = `data.${format.toLowerCase()}`;
      const contentType = acceptHeader;

      const blob = new Blob([content], { type: contentType });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error(`Error downloading ${format}:`, error.message);
    }
  };


  if (doctors.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="doctors_page-container">
        {doctors.map(doctor => (
          <DoctorsItem key={doctor.id} doctor={doctor} />
        ))}

      </div>
      <div className="download">
        <h5 className='ms-5'></h5>
        <div className="download-buttons d-flex  align-items-start gap-1 ms-5 mb-3">
          <button onClick={() => downloadFile('json')}>Скачать в JSON</button>
          <button onClick={() => downloadFile('xml')}>Скачать в XML</button>
          <button onClick={() => downloadFile('html')}>Скачать в HTML</button>
        </div>
      </div>


      <Footer />
    </>

  );
}

export default Doctors;