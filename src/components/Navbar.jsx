import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            alert("You're logged out");
            navigate('/');
        } catch (error) {
            alert('There was an error' + error);
        }
    };
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <Link to='/'>
                    <h1 className='logo text-[25px] text-blueColor'>
                        <strong> Dev </strong> Jobs
                    </h1>
                </Link>
            </div>
            <div className='menu flex gap-8'>
                {user?.email ? (
                    <>
                        <Link to='/account'>
                            <button className='menuList text-[#6f6f6f] hover:text-blueColor'>
                                Account
                            </button>
                        </Link>
                        <Link to='/'>
                            <button
                                onClick={handleLogout}
                                className='menuList text-[#6f6f6f] hover:text-blueColor'
                            >
                                Log Out
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to='/signup'>
                            <button className='menuList text-[#6f6f6f] hover:text-blueColor'>
                                Sign Up
                            </button>
                        </Link>
                        <Link to='/login'>
                            <button className='menuList text-[#6f6f6f] hover:text-blueColor'>
                                Login
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};
export default Navbar;
