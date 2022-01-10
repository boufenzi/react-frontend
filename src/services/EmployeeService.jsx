import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/";

class EmployeeService {
  getAllEmployees() {
    return axios.get(BASE_URL + "getAllEmployees");
  }
  saveEmploye(employee) {
    return axios.post(BASE_URL + "createEmploye", employee);
  }
  updateEmploye(employee) {
    return axios.put(BASE_URL + "updateEmployee", employee);
  }
  GetEmployeById(id) {
    return axios.get(BASE_URL + "getEmployeeById/" + id);
  }

  deleteEmployeeById(id) {
    return axios.delete(BASE_URL + "deleteEmployeeById/" + id);
  }
}

export default new EmployeeService();
