import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./sections/signIn/SignIn";
import SignUp from "./sections/signUp/SignUp";
import ForgotPassword from './sections/forgotPassword/ForgotPassword'
import Home from './sections/home/Home'

function App() {
    return (
        <BrowserRouter basename="/login-form-react">
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App