import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./sections/signIn/SignIn";
import SignUp from "./sections/signUp/SignUp";
import ForgotPassword from './sections/forgotPassword/ForgotPassword'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    )
}

export default App