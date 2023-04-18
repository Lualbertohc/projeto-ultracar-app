import { Route, Switch } from 'react-router-dom';
import ScanPage from './pages/ScanPage';
import UserPage from './pages/UserPage';
import PiecesPage from './pages/PiecesPage';
import ServicePage from './pages/ServicePages';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ ScanPage } />
        <Route exact path="/user" component={ UserPage } />
        <Route exact path="/pieces" component={ PiecesPage } />
        <Route exact path="/service" component={ ServicePage } />
      </Switch>
    </div>
  );
}

