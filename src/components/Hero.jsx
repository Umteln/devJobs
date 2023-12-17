import React from 'react';
import DropDown from './DropDown';

const Hero = () => {
    return (
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
    );
};

export default Hero;
