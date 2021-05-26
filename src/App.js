import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/login';
import AddService from './components/Dashboard/AddService/AddService';
import AddReview from './components/Dashboard/AddReview/AddReview';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">

            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
