import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

import EmployeeService from '../services/EmployeeService';

function ViewEmployeeComponent() {
    const { id } = useParams(); // Use the useParams hook to access route parameters
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((error) => {
                console.error('Error fetching employee:', error);
            });
    }, [id]); // Use id as a dependency for the useEffect

    return (
        <div className='bg-containererss'>
               <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center bold-text">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label  style={{ fontWeight: 'bold' }}>Employee First Name:</label>
                        <div > <span style={{ color: 'blue' }}>{employee.firstName}</span></div>
                    </div>
                    <div className="row">
                        <label  style={{ fontWeight: 'bold' }}>Employee Last Name:</label>
                        <div> <span style={{ color: 'blue' }}>{employee.lastName}</span></div>
                    </div>
                    <div className="row">
                        <label  style={{ fontWeight: 'bold' }}>Employee Email ID:</label>
                        <div> <span style={{ color: 'blue' }}>{employee.email_id}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;
