import AuthService from "./services/auth.service";
import { render } from 'react-dom';
import MainPage from './routes/MainPage.js';
import RegisterPage from './routes/RegisterPage.js';
import LoginPage from './routes/LoginPage.js';
import RecoveredPage from './routes/RecoveredPage.js';
import ProfilePage from './routes/ProfilePage.js';
import RegisterUserPage from  './routes/RegisterUserPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<MainPage/>}/>
          <Route path="/register" element = {<RegisterPage/>}/>
          <Route path="/registerUser" element = {<RegisterUserPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/recovered-password" element = {<RecoveredPage/>}/>
          <Route path="/profile/*" element = {<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
