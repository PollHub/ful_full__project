import Header from "./header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main/Main";
import Profile from "./profile/Profile";
import Create from "./create/Create";
import Login from "./user/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/profile'} component={Profile}/>
            <Route exact path={'/create'} component={Create}/>
            <Route exact path={'/login'} component={Login}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;