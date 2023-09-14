const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-4 m-auto items-start justify-center'>
            <div>
                <div className='logoDiv'>
                    <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
                        <strong> Dev </strong> Jobs
                    </h1>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle hidden md:text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Company
                </span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>
                        About Us
                    </li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>
                        Careers
                    </li>
                </div>
            </div>

            <div className='grid '>
                <span className='divTitle hidden md:text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Resources
                </span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>
                        FAQ
                    </li>

                    <li className='text-white opacity-[.7] hover:opacity-[1]'>
                        Promo
                    </li>
                </div>
            </div>

            <div className='grid'>
                <span className='divTitle hidden md:text-[18px] font-semibold pb-[1.5rem] text-white'>
                    Support
                </span>
                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>
                        Contact Us
                    </li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>
                        Request Info
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Footer;
