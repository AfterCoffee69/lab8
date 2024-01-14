import "./../styles/scheduleItem.css";
import React, { useState } from "react";

const ScheduleItem = ({ schedule }) => {
  const [schedule_item, setScheduleItem] = useState({
    id: schedule.id,
    room: schedule.room,
    doctor: schedule.doctor,
    date: schedule.date,
    time: schedule.time,
    status: schedule.status,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleDropdownItemClick(value) {
    const newStatus = value === "Работает" ? "Не работает" : "Работает";
    setScheduleItem((prevState) => ({
      ...prevState,
      status: newStatus,
    }));
  }

  function handleDeleteFunction() {
    setIsPopupOpen(true);
  }

  function handleCancel() {
    setIsPopupOpen(false);
  }

  function handleConfirm(schedule_id) {
    if (schedule.id === schedule_id) {
      setScheduleItem((prevState) => ({
        ...prevState,
        id: null,
        room: "",
        doctor: "",
        date: "",
        time: "",
        status: "",
      }));
      handleCancel();
    } else {
      handleCancel();
    }
  }

  const rowClassName = schedule_item.id === null ? "schedule_item-tr-hidden" : "schedule_item-tr";

  return (
    <>
      {!isPopupOpen && (
        <tr className={rowClassName} key={schedule.id}>
          <td>{schedule.room}</td>
          <td>{schedule.doctor}</td>
          <td>{schedule.date}</td>
          <td>{schedule.time}</td>
          <td>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {schedule.status}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleDropdownItemClick(schedule.status)}
                  >
                    {schedule.status === "Работает" ? "Не работает" : "Работает"}
                  </a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default ScheduleItem;