import { createContext, useContext, useState } from 'react';

const JobsContext = createContext();

export function JobsContextProvider({ children }) {
    const [jobs, setJobs] = useState([]);
    const [jobLocation, setJobLocation] = useState('ALL');

    const filteredJobs = jobs?.filter((job) => {
        if (jobLocation === 'ALL') {
            return jobs;
        } else {
            return job.job_state === jobLocation;
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
            }}
        >
            {children}
        </JobsContext.Provider>
    );
}

export function JobsAuth() {
    return useContext(JobsContext);
}
