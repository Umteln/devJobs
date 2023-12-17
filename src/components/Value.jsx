import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Value = () => {
    return (
        <div className='flex  flex-col justify-center items-center mb-[4rem] mt-[6rem]'>
            <h1 className='text-[textColor] text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
                Changing careers has never been easier.
            </h1>
            <div className='grid gap-3 grid-cols-3 items-center'>
                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex  items-center gap-2 md:gap-3'>
                        <div
                            className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h:[15px] w:[15px] md:h-[40px] md:w-[40px]
                                flex items-center justify-center'
                        >
                            <AiFillStar color='#fff' />
                        </div>
                        <span className='font-semibold text-textColor text-[16px] md:text-[18px]'>
                            Reliable
                        </span>
                    </div>
                </div>
                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-2 md:gap-3'>
                        <div
                            className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h:[15px] w:[15px] md:h-[40px] md:w-[40px]
             flex items-center justify-center'
                        >
                            <AiFillStar color='#fff' />
                        </div>
                        <span className='font-semibold text-textColor text-[16px] md:text-[18px]'>
                            Easy
                        </span>
                    </div>
                </div>
                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-2 md:gap-3'>
                        <div
                            className='imgDiv  p-[4px] rounded-[.8rem] bg-[#dedef8] h:[15px] w:[15px] md:h-[40px] md:w-[40px]
             flex items-center justify-center'
                        >
                            <AiFillStar color='#fff' />
                        </div>
                        <span className='font-semibold text-textColor text-[16px] md:text-[18px]'>
                            Trustworthy
                        </span>
                    </div>
                </div>
            </div>

            <div className='card mt-[2rem] flex justify-between border-[2px] border-blueColor p-3 rounded-[10px] '>
                <div className='mr-5'>
                    <h1 className='text-blueColor text-[25px] md:text-[30px] font-bold'>
                        Ready to switch careers
                    </h1>
                </div>

                <button
                    className='border-[2px] rounded-[10px] py-[4px] px-[25px] md:px-[50px] text-[18px] 
         font-semibold text-[#fff] bg-blueColor hover:text-blueColor hover:bg-[#dedef8] hover:border-blueColor'
                >
                    <Link to='/signup'> Get Started </Link>
                </button>
            </div>
        </div>
    );
};

export default Value;
