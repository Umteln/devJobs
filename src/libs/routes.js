import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Protected';

export const ROOT = '/';
export const LOGIN = '/login';
export const REGISTER = '/register';

export const PROTECTED = '/protected';
export const DASHBOARD = '/protected/dashboard';
export const USERS = '/protected/users';
export const PROFILE = '/protected/profile/:id';
export const COMMENTS = '/protected/comments/:id';
