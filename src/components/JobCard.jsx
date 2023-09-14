import { checkImageURL } from '../utils/checkImageUrl';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();
    const jobRef = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(jobRef, {
                savedJobs: arrayUnion({
                    id: uuidv4(),
                    title: job.job_title,
                    company: job.employer_name,
                    link: job.job_apply_link,
                    type: job.job_employment_type,
                }),
            });
        } else {
            alert('Please log in to save a job');
        }
    };

    return (
        <div
            className='group group/item singleJob  w-[400px] p-[20px] bg-white rounded-[10px]
       hover:bg-[#dedef8] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'
        >
            <span className='flex justify-between items-center gap-4'>
                <h1 className='mt-4 font-semibold text-2xl text-gray-700 mb-1 m-2 group-hover:text-blueColor'>
                    {' '}
                    {job?.job_title}
                </h1>
            </span>

            <div className='flex justify-between items-center'>
                <h6 className='text-gray-600  ml-2'>{job?.job_country}</h6>
                <p
                    onClick={saveShow}
                    className='flex items-center text-gray-600 gap-1 mx-4'
                >
                    Save
                    {like ? (
                        <AiFillStar className='text-[20px] text-blueColor' />
                    ) : (
                        <AiOutlineStar className='text-[20px] text-blueColor' />
                    )}
                </p>
            </div>
            <div>
                <div className='company flex  justify-left items-center gap-2'>
                    <img
                        src={
                            checkImageURL(job?.employer_logo)
                                ? job?.employer_logo
                                : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
                        }
                        alt={job?.employer_name}
                        className=' w-[20%] md:w-[10%] ml-2'
                    />
                    <span className='text-[14px] py-[1rem] block text-gray-600 font-semibold'>
                        {job?.employer_name}
                    </span>
                </div>
                <p
                    className='text-[16px] text-[#95959] pt-[5px]
       text-gray-600 m-2'
                >
                    {job?.job_description.substring(0, 150)} ...
                </p>
            </div>

            <Link to={`/job-details/${job.job_id}`}>
                <button
                    className='m-auto mb-2 border-[2px] border-blueColor bg-blueColor rounded-[10px] block p-[10px] w-[50%] text-[14px] font-semibold 
        text-[#fff] hover:border-blueColor hover:bg-white hover:text-gray-600'
                >
                    Apply
                </button>
            </Link>
        </div>
    );
};

export default JobCard;
