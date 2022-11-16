import RegisterPage from './routes/RegisterPage.js';
import LoginPage from './routes/LoginPage.js';
import ProfilePage from './routes/ProfilePage.js';
import RegisterUserPage from './routes/RegisterUserPage';
import RecoverPassword from './components/RecoverPassword';
import ChangePassword from './components/ChangePassword';
import AboutUsPage from './routes/AboutUsPage';
import FaqsPage from './routes/FaqsPage.js';
import PoliciesPage from './routes/PoliciesPage.js';
import ContactPage from './routes/ContactPage.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import RequestRecoverPassword from './components/RequestRecoverPassword.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registerUser" element={<RegisterUserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recover" element={<RequestRecoverPassword />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/FAQS" element={<FaqsPage />} />
          <Route path="/Policies" element={<PoliciesPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
