// App.tsx
/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './component/menu';
import UserCard from './component/usercard';
import LoginLogout from './component/loginlogout';
import ManagerLogin from './component/managerlogin';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/user-card" Component={UserCard} />
        <Route path="/login" Component={LoginLogout} />
        <Route path="/manager-login" Component={ManagerLogin} />
      </Switch>
    </Router>
  );
};

export default App;*/
// App.tsx

/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './component/menu';
import UserCard from './component/usercard';
import LoginLogout from './component/loginlogout';
import ManagerLogin from './component/managerlogin';


const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/user-card" component={UserCard} />
        <Route path="/login" component={LoginLogout} />
        <Route path="/manager-login" omponent={ManagerLogin} />
      </Switch>
    </Router>
  );
};

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './component/menu';
import UserCard from './component/usercard';
import LoginLogout from './component/loginlogout';
import ManagerLogin from './component/managerlogin';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Route path="/user-card" component={UserCard} />
      <Route path="/login" component={LoginLogout} />
      <Route path="/manager-login" component={ManagerLogin} />
    </Router>
  );
};

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './component/menu';
import UserCard from './component/usercard';
import LoginLogout from './component/loginlogout';
import ManagerLogin from './component/managerlogin';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
    <Menu />
      <Route path="/user-card" Component={UserCard} /> {/* Use 'component', not 'Component' */}
      <Route path="/login" Component={LoginLogout} /> {/* Use 'component', not 'Component' */}
      <Route path="/manager-login" Component={ManagerLogin} /> {/* Use 'component', not 'Component' */}
      </Routes>  
      
    </Router>
  );
};

export default App;

