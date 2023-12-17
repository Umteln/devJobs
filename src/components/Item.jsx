import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Item = ({ item, removeJob }) => {
    const { title, company, link, type, id } = item;

    return (
        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2  items-center justify-between cursor-pointer '>
            <div className='flex items-center text-center'>
                <p className='pl-4 mb-3 md:mb-0'>{title}</p>
            </div>
            <div className='flex items-center justify-center '>
                <p className='hidden md:block  text-gray-600  text-center pl-4'>
                    {company}
                </p>
            </div>
            <div className='flex items-center sm:mt-2 justify-center '>
                <Link
                    to={link}
                    className='font-semibold mr-2 text-blueColor hover:text-purple-600 hover:bg-white  cursor-pointer p-1 border border-blueColor  rounded-md md:border-none'
                >
                    Link
                </Link>
            </div>

            <div className='flex items-center justify-evenly md: mr-6 text-center'>
                <p> {type}</p>
                <button
                    onClick={() => removeJob(id)}
                    className='flex items-center gap-2 p-2 text-red-700 cursor-pointer bg-red-100 rounded-full hover:bg-red-200'
                >
                    <AiFillDelete />
                </button>
            </div>
        </li>
    );
};

export default Item;
