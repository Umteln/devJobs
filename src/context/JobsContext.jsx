import { createContext, useContext, useState } from 'react';

const JobsContext = createContext();

export function JobsContextProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    const [jobLocation, setJobLocation] = useState('ALL');
    const [searchText, setSearchText] = useState('');

    const filteredJobs = jobs?.filter((job) => {
        if (jobLocation === 'ALL') {
            return jobs;
        } else {
            job.job_state === jobLocation;
        }
    });

    return (
        <JobsContext.Provider
            value={{
                jobs,
                setJobs,
                filteredJobs,
                jobLocation,
                setJobLocation,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </JobsContext.Provider>
    );
}

export function JobsAuth() {
    return useContext(JobsContext);
}
