import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import UserForm from "./UserForm";

function App() {
  const [appointment, setAppointment] = useState();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    dob: "",
    history: "",
    allergy: "",
    purpose: "",
  });

  const processOperation = useCallback(() => {
    if (
      userData.firstName !== "" &&
      userData.lastName !== "" &&
      userData.purpose !== ""
    ) {
      alert("Your information have been captured!");
      const appointmentInformation = {
        ...userData,
        appointmentDay: appointment,
      };
      localStorage.setItem(
        "appointmentInformation",
        JSON.stringify(appointmentInformation)
      );
    }
  }, [userData, appointment]);

  useEffect(() => {
    processOperation();
  }, [processOperation]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main fixAppointment={setAppointment} />} />
          <Route
            path="user-information"
            element={<UserForm userData={setUserData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
