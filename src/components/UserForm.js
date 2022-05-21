import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = (props) => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    dob: "",
    history: "",
    allergy: "",
    purpose: "",
  });

  function handleOnChange(event) {
    event.preventDefault();
    setFields((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { userData } = props;
    userData(fields);
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Bio Information</legend>
          <div className="form-group">
            <label>First Name: </label>
            <br />
            <input
              type="text"
              value={fields.firstName}
              required={true}
              name="firstName"
              onChange={handleOnChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name : </label>
            <br />
            <input
              type="text"
              value={fields.lastName}
              required={true}
              name="lastName"
              onChange={handleOnChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label>Sex: </label>
            <br />
            <select
              value={fields.sex}
              required={true}
              name="sex"
              onChange={handleOnChange}
            >
              <option value="">::SEX::</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="complicated">Complicated</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date of Birth: </label>
            <br />
            <input
              type="date"
              value={fields.dob}
              required={true}
              name="dob"
              onChange={handleOnChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Medical Information</legend>
          <div className="form-group">
            <label>Purpose</label>
            <br />
            <textarea
              placeholder="Purpose of appointment"
              value={fields.purpose}
              required={true}
              name="purpose"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Medical History:</label>
            <br />
            <textarea
              placeholder="Medical history"
              value={fields.history}
              name="history"
              required={false}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Allergies</label>
            <br />
            <textarea
              placeholder="Allergies"
              value={fields.allergy}
              name="allergy"
              required={false}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </fieldset>
        <button type="submit" className="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default UserForm;
