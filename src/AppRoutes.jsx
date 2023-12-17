import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoutes from './components/Protected';
import Account from './pages/Account';
import Details from './pages/Details';

const AppRoutes = () => {
    return (
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
    );
};

export default AppRoutes;
