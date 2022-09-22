import { render } from 'react-dom';
import MainPage from './routes/MainPage.js';
import RegisterPage from './routes/RegisterPage.js';
import LoginPage from './routes/LoginPage.js';
import RecoveredPage from './routes/RecoveredPage.js';
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
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/recovered-password" element = {<RecoveredPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
