import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PageNotFound from './Components/PageNotFound';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Header/>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="*" element={<PageNotFound/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
