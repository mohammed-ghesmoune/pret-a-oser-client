import { Route, Routes, } from 'react-router-dom';

import Header from "./header/Header";
import Prestation from "./prestation/Prestation"
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Login from './login/Login';
import Logout from './logout/Logout';
import Profile from './profile/Profile';
import Signup from './signup/Signup';
import Forgetpassword from './forgetpassword/Forgetpassword';
const Front = () => {

  return (

    <Routes>

      <Route path="/" element={<Header />} >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path="forgetpassword" element={<Forgetpassword />} />
        <Route path="profil" element={<Profile />} />
        <Route path="prestation" >
          <Route path=":prestationId" element={<Prestation />} />
        </Route>
      </Route>
    </Routes>

  )
}

export default Front;