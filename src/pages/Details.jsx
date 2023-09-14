import { Link, useParams } from 'react-router-dom';
import { JobsAuth } from '../context/JobsContext';
import { checkImageURL } from '../utils/checkImageUrl';
const Details = () => {
    const { filteredJobs } = JobsAuth();
    const { id: jobId } = useParams();

    const job = filteredJobs.find((j) => j.job_id === jobId);

    return (
        <div
            className='group group/item singleJob   p-[20px] bg-white rounded-[10px]
       hover:bg-[#dedef8] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'
        >
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='mt-4 font-semibold text-2xl text-gray-700 mb-1 m-2 group-hover:text-blueColor'>
                            {' '}
                            {job?.job_title}
                        </h1>
                    </span>
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
                </div>

                <div className='flex justify-center items-center'>
                    <Link to={job.job_apply_link}>
                        <button
                            className='m-auto mb-2 border-[2px] border-blueColor bg-blueColor rounded-[10px] block p-[10px] w-full text-[14px] font-semibold 
        text-[#fff] hover:border-blueColor hover:bg-white hover:text-gray-600'
                        >
                            Apply
                        </button>
                    </Link>
                </div>
            </div>

            <p>Description: {job.job_description}</p>
        </div>
    );
};

export default Details;
