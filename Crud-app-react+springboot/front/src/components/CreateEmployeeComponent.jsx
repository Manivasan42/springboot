import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        email_id: '',
    });

    const saveEmployee = (e) => {
        e.preventDefault();
        console.log('employee =>', employee);

        // Call the createEmployee function from EmployeeService
        EmployeeService.createEmployee(employee)
            .then((response) => {
                console.log('Employee created successfully:', response.data);

                // Redirect to the '/employees' route after successful creation
                navigate('/employees');
            })
            .catch((error) => {
                console.error('Error creating employee:', error);
                // Handle errors appropriately
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const cancel = () => {
        navigate('/employees');
    };

    return (
        <div>
            <div className="bg-containers">
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Employee Id:</label>
                                    <input
                                        type='text'
                                        placeholder='Employee Id'
                                        name='employeeId'
                                        className='form-control'
                                        value={employee.employeeId}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>First Name:</label>
                                    <input
                                        type='text'
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={employee.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name:</label>
                                    <input
                                        type='text'
                                        placeholder='Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={employee.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Email Id:</label>
                                    <input
                                        type='email'
                                        placeholder='Email Address'
                                        name='email_id'
                                        className='form-control'
                                        value={employee.email_id}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}>
                                    Save
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={cancel}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;
