const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const scheduleDataPath = './src/pages/scheduleData.json';
const doctorDataPath = './src/pages/doctorsData.json'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/schedules', async (req, res) => {
  try {
    const jsonData = await fs.readFile(scheduleDataPath, 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});
app.get('/api/doctors', async (req, res) => {
  try {
    const jsonData = await fs.readFile(doctorDataPath, 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});
app.post('/api/addDoctors', async (req, res) => {
  try {
    const jsonData = await fs.readFile(doctorDataPath, 'utf8');
    const data = JSON.parse(jsonData);

    const newDoctor = req.body;
    data.push(newDoctor);

    await fs.writeFile(doctorDataPath, JSON.stringify(data, null, 2), 'utf8');

    res.json({ message: 'Данные успешно добавлены' });
  } catch (error) {
    console.error('Ошибка при записи в файл:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});
app.post('/api/roomUpdate',async (req, res) => {
  try {
    const { roomId, isCleaned } = req.body;
    console.log(roomId, isCleaned)
    let data = JSON.parse(await fs.readFile('./src/pages/roomsData.json', 'utf8'));
    const room = data.find((room) => room.id === roomId);
    console.log("room! = " + JSON.stringify(room))
    if (room) {
      room.cleaned = isCleaned;

      await fs.writeFile('./src/pages/roomsData.json', JSON.stringify(data, null, 2));

      res.json({ message: 'Data updated successfully' });
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const generateHTML = (data) => {
  let html = '';

  data.forEach((doctor) => {
    html += `<div>
      <h2>${doctor.name}</h2>
      <ul>
        ${doctor.members.map((member) => `
          <li>
            <img src="${member.img}" alt="${member.name}" />
            <p>Name: ${member.name}</p>
            <p>Contact: ${member.contact}</p>
            <p>Experience: ${member.experience}</p>
          </li>
        `).join('')}
      </ul>
      <ul>
        ${doctor.schedule.map((event) => `
          <li>
            <p>ID: ${event.id}</p>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Room: ${event.room}</p>
          </li>
        `).join('')}
      </ul>
    </div>`;
  });

  return html;
};

function convertJsonToXml(jsonData, rootName = 'root') {
  let xml = '';

  const toXml = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const isArray = Array.isArray(value);
        const isObject = typeof value === 'object' && !isArray;

        if (isObject && !isArray) {
          if (key === 'members' || key === 'schedule') {
            xml += `<${key}>`;
            value.forEach((item) => {
              toXml(item);
            });
            xml += `</${key}>`;
          } else {
            xml += `<${key} id="${value.id}">`;
            for (const subKey in value) {
              if (value.hasOwnProperty(subKey)) {
                const subValue = value[subKey];
                const isSubObject = typeof subValue === 'object' && !isArray;

                if (isSubObject) {
                  xml += `<${subKey}>`;
                  toXml(subValue);
                  xml += `</${subKey}>`;
                } else {
                  xml += `<${subKey}>${subValue}</${subKey}>`;
                }
              }
            }
            xml += `</${key}>`;
          }
        } else if (isArray) {
          xml += `<${key}>`;
          value.forEach((item) => {
            toXml(item);
          });
          xml += `</${key}>`;
        } else {
          xml += `<${key}>${value}</${key}>`;
        }
      }
    }
  };

  toXml({ [rootName]: jsonData });

  return xml;
}


app.get('/api/formattedData', async (req, res) => {
  const acceptHeader = req.headers.accept;
  const data = await fs.readFile(doctorDataPath, 'utf8');
  if (acceptHeader.includes('application/json')) {
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } else if (acceptHeader.includes('application/xml')) {
    const xmlData = convertJsonToXml(JSON.parse(data));
    res.type('application/xml').send(xmlData);
  } else if (acceptHeader.includes('text/html')) {
    const htmlData = generateHTML(JSON.parse(data)); 
    res.send(htmlData);
  } else {
    res.status(406).send('Not Acceptable');
  }
});
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});