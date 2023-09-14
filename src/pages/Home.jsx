import Value from '../components/Value';
import Footer from '../components/Footer';
import JobBoard from '../components/JobBoard';
import DropDown from '../components/DropDown';
import useFetch from '../utils/useFetch';
import { JobsAuth } from '../context/JobsContext';
import { useEffect } from 'react';

const Home = () => {
    const { setJobs } = JobsAuth();

    const { data, isLoading, error } = useFetch('search', {
        query: 'Software Engineer in USA',
        num_pages: 2,
    });
    console.log(data);
    useEffect(() => {
        setJobs(data);
    }, [data]);
    return (
        <div>
            <>
                <div className=' searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] '>
                    <div
                        className='firstDiv flex flex-col  justify-center items-center rounded-[8px]  md:gap-10
            bg-white p-5 shadow-lg shadow-greyIsh-700 '
                    >
                        <div className=' flex flex-col  text-center '>
                            <h1 className='text-5xl text-bold text-blueColor text-center'>
                                Job Board
                            </h1>
                            <p className='mt-3 text-gray-400 text-semibold'>
                                Discover new opportunities
                            </p>
                        </div>
                    </div>

                    <DropDown />
                </div>
                <JobBoard
                    isLoading={isLoading}
                    error={error}
                />

                <Value />

                <Footer />
            </>
        </div>
    );
};

export default Home;
