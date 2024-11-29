import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/Sendmoney";



function App() {
  
  return (
    <>

    <div className="main">



      <BrowserRouter>
             <Routes>
             <Route path="/signin" element={<Signin />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/sendmoney" element={<SendMoney />} />
             <Route path="/dashboard" element={<Dashboard />} />

             </Routes>
       </BrowserRouter>







    </div>
     
    </>
  )
}

export default App
