import Value from '../components/Value';
import JobBoard from '../components/JobBoard';
import useFetch from '../utils/useFetch';
import { JobsAuth } from '../context/JobsContext';
import { useEffect } from 'react';
import Hero from '../components/Hero';

const Home = () => {
    const { setJobs } = JobsAuth();

    const { data, isLoading, error } = useFetch('search', {
        query: 'Software Engineer in USA',
        num_pages: 2,
    });

    useEffect(() => {
        setJobs(data);
    }, [data]);

    return (
        <>
            <Hero />
            <JobBoard
                isLoading={isLoading}
                error={error}
            />

            <Value />
        </>
    );
};

export default Home;
