import { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import Item from './Item';

const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);
    const { user } = UserAuth();
    const jobsRef = doc(db, 'users', `${user?.email}`);

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setSavedJobs(doc.data()?.savedJobs);
        });
    }, [user?.email]);

    const removeJob = async (id) => {
        try {
            const result = savedJobs.filter((item) => item.id !== id);
            await updateDoc(jobsRef, {
                savedJobs: result,
            });
            alert('Job has been removed');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex items-center justify-center p-3'>
                <h4 className='text-2xl md:text-5xl font-bold text-blueColor'>
                    Job Bank
                </h4>
            </div>

            <div className='p-2'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span> Job Title </span>
                        <span className='hidden sm:grid'>Company</span>
                        <span className='sm:text-left text-right '>Apply</span>
                        <span className='hidden sm:grid'>Employment Type</span>
                    </div>
                    <ul>
                        {savedJobs?.map((item, i) => (
                            <Item
                                key={`${item.title}${i}`}
                                item={item}
                                removeJob={removeJob}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SavedJobs;
