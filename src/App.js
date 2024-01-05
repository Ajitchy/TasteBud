import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
