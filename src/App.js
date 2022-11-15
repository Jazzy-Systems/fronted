import RegisterPage from './routes/RegisterPage.js';
import LoginPage from './routes/LoginPage.js';
import RecoveredPage from './routes/RecoveredPage.js';
import ProfilePage from './routes/ProfilePage.js';
import RegisterUserPage from './routes/RegisterUserPage';
import RecoverPassword from './components/RecoverPassword';
import ChangePassword from './components/ChangePassword';
import AboutUsPage from './routes/AboutUsPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CreatePqrs from './components/CreatePQRS.js';
import ViewRequests from './components/ViewPQRS.js';
// Bootstrap CSS

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registerUser" element={<RegisterUserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recover" element={<RecoveredPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/createpqrs" element={<CreatePqrs />} />
          <Route path="/viewrequests" element={<ViewRequests />} />
          <Route path="/AboutUs" element={<AboutUsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
