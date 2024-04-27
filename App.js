import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './Table';
import Navbar from './Navbar';
import Form from './Form';
import LoginPage from './LoginPage'; // Import LoginPage component
import SignupPage from './SignupPage'; // Import SignupPage component

const App = () => {
  const [patientData, setPatientData] = useState([]);

  const handleSubmit = (formData) => {
    setPatientData([...patientData, formData]);
  };

  const handleModify = (index, modifiedData) => {
    // Create a new array with the modified data
    const updatedData = patientData.map((item, i) => (i === index ? modifiedData : item));
    setPatientData(updatedData);
  };

  const handleDelete = (index) => {
    // Remove the item at the specified index from the array
    const updatedData = [...patientData.slice(0, index), ...patientData.slice(index + 1)];
    setPatientData(updatedData);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={patientData.length > 0 ? (
              <Table data={patientData} onModify={handleModify} onDelete={handleDelete} />
            ) : (
              <p>No patient data available</p>
            )}
          />
          <Route path="/form" element={<Form onSubmit={handleSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
