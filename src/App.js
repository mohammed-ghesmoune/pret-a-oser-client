
// import Admin from "./components/admin/Admin";
import Front from "./components/front/Front"
import { AuthProvider } from "./components/front/auth/AuthProvider";

import { BrowserRouter, Route, Routes, } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<AuthProvider><Front /></AuthProvider>} />
      {/* <Route path="/admin/*" element={<Admin />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
