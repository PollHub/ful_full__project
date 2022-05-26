import Header from "./header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main/Main";
import Profile from "./profile/Profile";
import Create from "./create/Create";
import Login from "./user/login";
import Register from "./user/Register";
import Passage from "./passage/Passage";
import PassageQuestion from "./passage/PassageQuestion";
import Finish from "./passage/Finish";
import TestForPopap from "./testForPopap/TestForPopap";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <div className="content">
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/profile'} component={Profile}/>
            <Route exact path={'/create'} component={Create}/>
            <Route exact path={'/register'} component={Login}/>
            <Route exact path={'/login'} component={Register}/>
            <Route exact path={'/passage/:id'} component={Passage}/>
            <Route exact path={'/passage/:id/question/:qid'} component={PassageQuestion}/>
            <Route exact path={'/passage/:id/finish'} component={Finish}/>
            <Route exact path={'/forpopap/:id'} component={TestForPopap}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;