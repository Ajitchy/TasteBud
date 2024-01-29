import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PageNotFound from './Components/PageNotFound';
import Profile from './Components/Profile';
import Orders from './Components/Orders';
import Dashboard from './Components/Dashboard';
import WithSidebar from './Components/WithSidebar';
import WithHeaderFooter from './Components/WithHeaderFooter';


function App() {
  //with sidebar
  const ProfilePage = WithSidebar(Profile);
  const OrderPage = WithSidebar(Orders);
  const DashboardPage = WithSidebar(Dashboard);
   
  //with Header Footer
  const HomePage = WithHeaderFooter(Home);
  const LoginPage = WithHeaderFooter(Login);
  const SignUpPage = WithHeaderFooter(SignUp);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/orders" element={<OrderPage/>} />
        <Route exact path="/dashboard" element={<DashboardPage/>} />
      </Routes>

    </Router>
  );
}

export default App;
