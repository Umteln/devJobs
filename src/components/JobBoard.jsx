import JobCard from './JobCard';
import Loader from './Loader';
import { JobsAuth } from '../context/JobsContext';
import { useState } from 'react';
import Pagination from './Pagination';
import Error from './Error';

const JobBoard = ({ isLoading, error }) => {
    const { filteredJobs } = JobsAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = filteredJobs.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <div>
                <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                    {isLoading ? (
                        <Loader />
                    ) : error ? (
                        <Error />
                    ) : (
                        currentPosts?.map((job, i) => (
                            <JobCard
                                key={i}
                                job={job}
                            />
                        ))
                    )}
                </div>
            </div>
            <Pagination
                totalPosts={filteredJobs.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default JobBoard;
