import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ filteredList, setFilteredList, setJobs, jobs }) => {
    const [userInput, setUserInput] = useState('');

    // filter
    const handleFilter = (text) => {
        if (text !== '') {
            let newList = filteredList.filter((job) =>
                job.text?.toLowerCase().includes(text.toLowerCase())
            );

            setFilteredList(newList);
        } else {
            setFilteredList(jobs);
        }
    };

    return (
        <div className=' searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] '>
            <div
                className='firstDiv flex flex-col md:flex-row justify-between items-center rounded-[8px]  md:gap-10
            bg-white p-5 shadow-lg shadow-greyIsh-700 '
            >
                <div className='flex gap-20 items-center '>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input
                            type='text'
                            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                            placeholder='Filter jobs...'
                            onChange={(e) => {
                                setUserInput(e.target.value);
                                handleFilter(e.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
