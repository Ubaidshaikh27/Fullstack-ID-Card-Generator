import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const apiUri = "http://localhost:3000/api/table"

  // Fetch employees from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(apiUri);
        console.log("response:", response.data.users);
        
        setEmployees(response.data.users);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);


  return (
    <div>
      <h1>Employee Records</h1>
      <table className="table">
        <thead>
          <tr >
          <th >Image</th>
            <th >Id Number</th>
            <th >First Name</th>
            <th >Last Name</th>
            <th >Position</th>
            <th >Department</th>
            <th >Email</th>
            <th >Year</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td> <img className='tableImage' src={employee.image}/></td>
              <td >{employee.idNumber}</td>
              <td >{employee.fname}</td>
              <td >{employee.lname}</td>
              <td >{employee.position}</td>
              <td >{employee.dept}</td>
              <td >{employee.email}</td>
              <td >{employee.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
