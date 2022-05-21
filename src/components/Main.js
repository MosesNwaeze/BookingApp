import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const [appointment, setAppointment] = useState();
  const navigate = useNavigate();

  function handleAppointment(event) {
    event.preventDefault();
    const { fixAppointment } = props;
    if (appointment === "" || typeof appointment === "undefined") {
      return alert("Date cannot be empty!");
    } else {
      fixAppointment(appointment);
      navigate("/user-information");
    }
  }
  return (
    <main className="appointment">
      <h1>Doctor's appointment System</h1>
      <input
        type="date"
        onChange={(event) => setAppointment(event.target.value)}
      />
      <button onClick={handleAppointment} className="btn-appoint">
        Book Appointment
      </button>
    </main>
  );
};

export default Main;
