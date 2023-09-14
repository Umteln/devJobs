const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='flex flex-wrap justify-center mt-[1rem]'>
            {pages.map((page, index) => (
                <button
                    onClick={() => setCurrentPage(page)}
                    className={
                        page === currentPage
                            ? 'w-[40px] h-[40px] text-[#fff] font-bold mx-[10px] cursor-pointer bg-blueColor border-[1px] border-blueColor rounded-lg'
                            : 'w-[40px] h-[40px] text-gray-600 font-semibold mx-[10px] cursor-pointer bg-transparent border-[1px] border-blueColor rounded-lg'
                    }
                    key={index}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
