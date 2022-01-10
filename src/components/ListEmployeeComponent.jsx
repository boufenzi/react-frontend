import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAll();
  }, []);
  const getAll = () => {
    EmployeeService.getAllEmployees().then((res) => {
      setEmployees(res.data);
    });
  };
  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployeeById(employeeId).then((res) => {
      getAll();
    });
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <Link
            to="/addEmployee"
            className="btn btn-sm btn-primary float-right"
          >
            Add
          </Link>
          <table className="table table-responsive table-bordered">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <Link
                      to={`/updateEmployee/${employee.id}`}
                      className="btn-sm btn btn-info m-2"
                    >
                      update
                    </Link>

                    <button
                      className="btn-sm btn btn-danger m-2"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
