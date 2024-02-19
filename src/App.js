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
import Billings from './Components/Billings';
import Help from './Components/Help';
import Settings from './Components/Settings';
import Dashboard from './Components/Dashboard';
import WithSidebar from './Components/HOF/WithSidebar';
import WithHeaderFooter from './Components/HOF/WithHeaderFooter';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  //with sidebar
  const DashboardPage = WithSidebar(Dashboard);
  const OrderPage = WithSidebar(Orders);
  const ProfilePage = WithSidebar(Profile);
  const BillingPage = WithSidebar(Billings);
  const HelpPage = WithSidebar(Help);
  const SettingsPage = WithSidebar(Settings);

  //with Header Footer
  const HomePage = WithHeaderFooter(Home);
  const LoginPage = WithHeaderFooter(Login);
  const SignUpPage = WithHeaderFooter(SignUp);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="*" element={<PageNotFound />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/orders" element={<OrderPage />} />
            <Route exact path="/dashboard" element={<DashboardPage />} />
            <Route exact path="/billings" element={<BillingPage/>} />
            <Route exact path="/help" element={<HelpPage/>} />
            <Route exact path="/settings" element={<SettingsPage />} />
          </Routes>

        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
