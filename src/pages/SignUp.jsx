import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const [error, setError] = useState(false);
    const { signUp } = UserAuth();
    const navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Too Short! Password must be at least 6 characters')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const handleSubmit = async (values) => {
        try {
            await signUp(values.email, values.password);
            alert('Success, Account created');
            navigate('/account');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='flex items-center justify-center absolute w-full px-4 py-24 z-50'>
                    <div className='max-w-lg w-full h-[600px]  bg-black text-white'>
                        <div className='max-w-[320px] mx-auto py-16 text-center'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <Formik
                                initialValues={{
                                    password: '',
                                    email: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={(values) => handleSubmit(values)}
                            >
                                {({ errors, touched }) => (
                                    <Form className='w-full flex flex-col py-4'>
                                        <div className='flex items-center  justify-between '>
                                            <label htmlFor='email'>Email</label>
                                            <Field
                                                name='email'
                                                type='email'
                                                placeholder='Email'
                                                autoComplete='email'
                                                className='p-3 my-2 bg-gray-700 rounded'
                                            />
                                        </div>
                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                        <div className='flex items-center justify-between'>
                                            <label htmlFor='password'>
                                                Password
                                            </label>
                                            <Field
                                                name='password'
                                                type='password'
                                                className='p-3 my-2 bg-gray-700 rounded '
                                                placeholder='Password'
                                                autoComplete='current-password'
                                            />
                                        </div>
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                        <button
                                            type='submit'
                                            className='bg-blueColor py-3 my-6 rounded font-bold'
                                        >
                                            Sign Up
                                        </button>
                                        {error && (
                                            <p className='text-sm text-red-600'>
                                                There is an issue with email or
                                                password
                                            </p>
                                        )}
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
                                                Already have an account?
                                            </span>{' '}
                                            <Link to='/login'>Login</Link>
                                        </p>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SignUp;
