import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import bg from '../assets/white-bg.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { logIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/account');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center absolute w-full px-4 py-24 z-50'>
                <div className='max-w-lg w-full h-[600px]  bg-black text-white'>
                    <div className='max-w-[320px] mx-auto py-16 text-center'>
                        <h1 className='text-3xl font-bold'>Login</h1>
                        {error ? (
                            <p className='p-3 bg-red-400 my-2'>
                                There is a problem with email or password
                            </p>
                        ) : null}
                        <form
                            onSubmit={handleSubmit}
                            className='w-full flex flex-col py-4'
                        >
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className='p-3 my-2 bg-gray-700 rouded'
                                type='email'
                                placeholder='Email'
                                autoComplete='email'
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-3 my-2 bg-gray-700 rouded'
                                type='password'
                                placeholder='Password'
                                autoComplete='current-password'
                            />
                            <button className='bg-blueColor py-3 my-6 rounded font-bold'>
                                Sign Up
                            </button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p>
                                    <input
                                        className='mr-2'
                                        type='checkbox'
                                    />
                                    Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-600'>
                                    Don&apos;t have an account?
                                </span>{' '}
                                <Link to='/signup'>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
