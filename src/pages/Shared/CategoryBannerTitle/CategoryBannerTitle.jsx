

const CategoryBannerTitle = ({heading}) => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='font-extrabold text-3xl text-center capitalize text-indigo-700'>{heading}</h2>
            <div className="flex justify-center mt-2">
                <hr className='w-52 h-1 bg-indigo-700'></hr>
            </div>
        </div>
    );
};

export default CategoryBannerTitle;