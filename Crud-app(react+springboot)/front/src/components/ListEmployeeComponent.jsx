import React, { useEffect, useState } from 'react';
import './frot.css';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const addEmployee = () => {
        navigate('/add-employee');
    };

    // const editEmployee = (id) => {
    //     // Implement your edit logic here, e.g., redirect to an edit page
    //     console.log(`Edit employee with ID: ${id}`);
    //     this.props.history.push(`/update-employee/${id}`);
    // };
    const editEmployee = (id) => {
        // Implement your edit logic here, e.g., redirect to an edit page
        console.log(`Edit employee with ID: ${id}`);
        navigate(`/update-employee/${id}`);
    };
    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    };
    
    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then((res) => {
                setEmployees((prevEmployees) =>
                    prevEmployees.filter((employee) => employee.id !== id)
                );
                console.log('Employee deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting employee:', error);
            });
    };
    
    return (
        <div className="bg-container">
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}>
                    Add Employee
                </button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            { <th>Employee Id</th> }
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td style={{ fontWeight: 'bold', color: 'blue' }}>
                                    {employee.id}
                                </td>
                                <td style={{ fontWeight: 'bold', color: 'blue' }}>
                                    {employee.firstName}
                                </td>
                                <td style={{ fontWeight: 'bold', color: 'blue' }}>
                                    {employee.lastName}
                                </td>
                                <td style={{ fontWeight: 'bold', color: 'blue' }}>
                                    {employee.email_id}
                                </td>
                                <td>
                                    <button
                                        onClick={() => editEmployee(employee.id)}
                                        className="btn btn-info"
                                    >
                                        update
                                    </button>
                                    <button
                                onClick={() => deleteEmployee(employee.id)}
                                className="btn btn-danger"
                                style={{ marginLeft: '10px'}}
                                    >
                                        delete
                                    </button>
                                    <button
                                onClick={() => viewEmployee(employee.id)}
                                className="btn btn-info"
                                style={{ marginLeft: '10px'}}
                                    >
                                        view
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
