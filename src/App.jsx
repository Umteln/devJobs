import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoutes from './components/Protected';
import Account from './pages/Account';
import { JobsContextProvider } from './context/JobsContext';
import Details from './pages/Details';

function App() {
    return (
        <div className=' w-[85%] m-auto bg-white'>
            <JobsContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />

                        <Route
                            path='/login'
                            element={<Login />}
                        />
                        <Route
                            path='/job-details/:id'
                            element={<Details />}
                        />
                        <Route
                            path='/signup'
                            element={<SignUp />}
                        />
                        <Route
                            path='/account'
                            element={
                                <ProtectedRoutes>
                                    <Account />
                                </ProtectedRoutes>
                            }
                        />
                    </Routes>
                </AuthContextProvider>
            </JobsContextProvider>
        </div>
    );
}

export default App;
