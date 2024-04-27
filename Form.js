// Form.js

import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    relation: '',
    age: '',
    regDate: '',
    sys: '',
    dis: '',
    pulses: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear the form after submission
    setFormData({
      patientName: '',
      relation: '',
      age: '',
      regDate: '',
      sys: '',
      dis: '',
      pulses: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Enter Patient Details</h2>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="relation">Relation:</label>
          <input type="text" id="relation" name="relation" value={formData.relation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="regDate">Registration Date:</label>
          <input type="date" id="regDate" name="regDate" value={formData.regDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sys">Sys:</label>
          <input type="text" id="sys" name="sys" value={formData.sys} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dis">Dis:</label>
          <input type="text" id="dis" name="dis" value={formData.dis} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pulses">Pulses:</label>
          <input type="text" id="pulses" name="pulses" value={formData.pulses} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
