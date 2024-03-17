import test from './pages/test';
import admin from './pages/admin';
import editing from './pages/editing';
import linkandcontribution from './pages/linkandcontribution';
import login from './pages/login';
import mainpage from './pages/mainpage';
import new_project from './pages/new_project';
import project_page from './pages/project_page';
import register from './pages/register';
import userdetails from './pages/userdetails';
import './App.css';
import {  BrowserRouter as Router, Route, Switch, Routes, Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={mainpage}/>
        <Route path='/test' component={test}/>
        <Route path='/admin' component={admin}/>
        <Route path='/editing' component={editing}/>
        <Route path='/linkandcontribution' component={linkandcontribution}/>
        <Route path='/login' component={login}/>
        {/* <Route path='/mainpage' component={mainpage}/> */}
        <Route path='/new_project' component={new_project}/>
        <Route path='/project_page' component={project_page}/>
        <Route path='/register' component={register}/>
        <Route path='/userdetails' component={userdetails}/>
      </Switch>
    </Router>
  );
}

export default App;
