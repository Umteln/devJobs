import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Item = ({ item, removeJob }) => {
    const { title, company, link, type, id } = item;
    return (
        <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <div className='flex items-center'>
                <div className='bg-red-100 p-3 rounded-lg'>
                    <button onClick={() => removeJob(id)}>
                        <AiFillDelete className='text-blue-800' />
                    </button>
                </div>
                <p className='pl-4'>{title}</p>
            </div>
            <div className='flex items-center'>
                <p className='hidden md:block text-gray-600 sm:text-left text-right'>
                    {company}
                </p>
            </div>
            <div className='flex items-center'>
                <p className='text-right mr-2 md:flex text-blueColor cursor-pointer '>
                    <Link
                        to={link}
                        className=''
                    >
                        Link
                    </Link>
                </p>
            </div>

            <div className='hidden md:block items-center justify-evenly'>
                <p className=' text-gray-600 sm:text-left text-right'>{type}</p>
            </div>
        </li>
    );
};

export default Item;
