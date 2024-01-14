import "./../styles/roomItem.css";
import React, { useState } from "react";
import MyPopup from "./CustomPopup";

const RoomItem = ({ room }) => {
  const [status, setStatus] = useState(room.status);
  const roomId = room.id;

  function updateStatus(newStatus) {
    fetch("http://localhost:3000/api/roomUpdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomId: roomId, status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data saved:", JSON.stringify(data));
      });
  }

  function handleChangeStatus() {
    const newStatus = status === "Работает" ? "Не работает" : "Работает";
    setStatus(newStatus);
    updateStatus(newStatus); 
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="roomItem-card_header">
          <h5 className="card-title">{room.name}</h5>
        </div>
        <hr className="roomItem-hr" />
        <div className="roomItem-popup_container">
          <MyPopup
            item={<button className="popup-btn">Информация</button>}
            popupContent={
              <div style={{ padding: "2rem 4rem" }}>
                <p style={{ marginBottom: "1rem" }}>Статус: {status}</p>
              </div>
            }
          />

          <button
            className="btn btn-outline-secondary"
            onClick={handleChangeStatus}
          >
            Изменить статус
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomItem;