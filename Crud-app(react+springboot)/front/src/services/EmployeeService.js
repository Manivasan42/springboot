import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9191/employee/getall";
const EMPLOYEE_API_URL="http://localhost:9191/employee/addEmployee"
const EMPLOYEE_PUT_API_URL="http://localhost:9191/employee/updateEmployee"
const EMPLOYEE_DELETEID_API_URL="http://localhost:9191/employee/deleteEmployee"
const EMPLOYEE_GETID_API_URL = "http://localhost:9191/employee/getId"

// Create a custom Axios instance for EmployeeService
const employeeServiceAxios = axios.create({
    baseURL: EMPLOYEE_API_BASE_URL,
});

class EmployeeService {

    getEmployees(){
        return employeeServiceAxios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return employeeServiceAxios.post(EMPLOYEE_API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_GETID_API_URL+'/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_PUT_API_URL + '/' + employeeId, employee);
    }


    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_DELETEID_API_URL +'/'+  employeeId);
    }
}

const employeeServiceInstance = new EmployeeService();

export default employeeServiceInstance;
