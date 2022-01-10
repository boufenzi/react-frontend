import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const { id } = useParams();

  /************** functions************** */

  const saveEmploye = (e) => {
    e.preventDefault(); // to not refresh  the page
    const employee = { firstName, lastName, email };

    EmployeeService.saveEmploye(employee).then(
      (res) => history.push("/employeesList") // redirect to the listCOmponent
    );
  };

  const updateEmploye = (e) => {
    e.preventDefault(); // to not refresh  the page
    const employee = { id, firstName, lastName, email };

    EmployeeService.updateEmploye(employee).then(
      (res) => history.push("/employeesList") // redirect to the listCOmponent
    );
  };

  useEffect(() => {
    if (id) {
      EmployeeService.GetEmployeById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const title = () => {
    if (id) return "Update Employee";
    else return "Add Employee";
  };

  const save = (e) => {
    if (id) return updateEmploye(e);
    else return saveEmploye(e);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6 card">
            <h2 className="text-center">{title()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">firstname : </label>
                  <input
                    type="text"
                    placeholder="firstname"
                    className="form-control"
                    value={firstName}
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">lastname : </label>
                  <input
                    type="text"
                    placeholder="lastname"
                    className="form-control"
                    value={lastName}
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">email : </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="form-control"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-primary m-2"
                  onClick={(e) => save(e)}
                >
                  save
                </button>
                <Link to="/employeesList" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
