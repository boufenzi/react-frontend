import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              path="/employeesList"
              exact
              component={ListEmployeeComponent}
            ></Route>
            <Route
              path="/updateEmployee/:id"
              exact
              component={AddEmployeeComponent}
            ></Route>
            <Route
              path="/addEmployee"
              exact
              component={AddEmployeeComponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
