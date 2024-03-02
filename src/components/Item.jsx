import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Item = ({ item, removeJob }) => {
    const { title, company, link, type, id } = item;

    return (
        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg  my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between text-center'>
            <div className='flex items-center text-center'>
                <Link
                    to={link}
                    className='md:pl-4 hover:bg-indigo-100 cursor-pointer p-2 rounded-md'
                >
                    {title}
                </Link>
            </div>
            <div className='hidden md:flex items-center justify-center '>
                <p className='  text-gray-600 text-center pl-4'>{company}</p>
            </div>
            <div className='flex items-center justify-center '>
                <p> {type}</p>
            </div>

            <div className='hidden md:flex items-center justify-center '>
                <button
                    onClick={() => removeJob(id)}
                    className='flex items-center gap-2 p-2 text-red-700 cursor-pointer bg-red-100 rounded-full hover:bg-red-200 '
                >
                    <AiFillDelete />
                </button>
            </div>
        </li>
    );
};

export default Item;
