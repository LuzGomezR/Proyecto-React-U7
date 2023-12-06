import { useState } from "react";

import AuthContext from "./context/authContext";

import Registro from "./components/Registro";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";


const App = () => {
  
  const [step, setStep] = useState("registro");
  
  return (
  <AuthContext.Provider value={{ step, setStep }}>
  <div  className="container">
    {step === "registro" && <Registro />}
    {step === "forgot" && <ForgotPassword />}
    {step === "login" && <Login />}
  </div>
  </AuthContext.Provider>
  );
}; 

export default App
