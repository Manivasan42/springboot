import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        email_id: '',
    });

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id).then((res) => {
                let employeeData = res.data;
                setEmployee({
                    id: id,
                    firstName: employeeData.firstName,
                    lastName: employeeData.lastName,
                    email_id: employeeData.email_id,
                });
            });
        }
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        let employeeData = {
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email_id: employee.email_id,
        };

        EmployeeService.updateEmployee(employeeData, id).then((res) => {
            console.log('Employee updated successfully');
            navigate('/employees');
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
        <div  className="bg-containerers">
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }}>First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={employee.firstName}
                                        onChange={handleChange}
                                        style={{ color: 'blue' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }}>Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={employee.lastName}
                                        onChange={handleChange}
                                        style={{ color: 'blue' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }}>Email Id: </label>
                                    <input
                                        placeholder="Email Address"
                                        name="email_id"
                                        className="form-control"
                                        value={employee.email_id}
                                        onChange={handleChange}
                                        style={{ color: 'blue' }}
                                    />
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={updateEmployee}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
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

export default UpdateEmployeeComponent;
