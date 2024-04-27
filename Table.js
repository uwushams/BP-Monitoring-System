import React, { useState } from 'react';
import './Table.css';

const Table = ({ data, onModify, onDelete }) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});

  const handleModify = (index) => {
    if (editingIndex === index) {
      // Save the edited data
      onModify(index, editedData);
      setEditingIndex(-1);
    } else {
      // Start editing
      setEditingIndex(index);
      setEditedData(data[index]);
    }
  };

  const handleInputChange = (e, key) => {
    setEditedData({ ...editedData, [key]: e.target.value });
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="table-container">
      <h2>Patient Details</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Relation</th>
            <th>Age</th>
            <th>Registration Date</th>
            <th>Sys</th>
            <th>Dis</th>
            <th>Pulses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient, index) => (
            <tr key={index}>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.patientName} onChange={(e) => handleInputChange(e, 'patientName')} />
                ) : (
                  patient.patientName
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.relation} onChange={(e) => handleInputChange(e, 'relation')} />
                ) : (
                  patient.relation
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.age} onChange={(e) => handleInputChange(e, 'age')} />
                ) : (
                  patient.age
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.regDate} onChange={(e) => handleInputChange(e, 'regDate')} />
                ) : (
                  patient.regDate
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.sys} onChange={(e) => handleInputChange(e, 'sys')} />
                ) : (
                  patient.sys
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.dis} onChange={(e) => handleInputChange(e, 'dis')} />
                ) : (
                  patient.dis
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input type="text" value={editedData.pulses} onChange={(e) => handleInputChange(e, 'pulses')} />
                ) : (
                  patient.pulses
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button onClick={() => handleModify(index)}>Save</button>
                ) : (
                  <button onClick={() => handleModify(index)}>Edit</button>
                )}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
