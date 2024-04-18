import cardImg1 from '../../../assets/banner/1.jpeg'
import CategoryBannerTitle from '../../Shared/CategoryBannerTitle/CategoryBannerTitle';

const TotalUnits = () => {
    return (
        <div className="mt-20">
            <CategoryBannerTitle heading="Our Apparel Business" />
            <div className='grid md:grid-cols-3 gap-5 mt-10 max-w-6xl md:mx-auto ml-5 mr-5'>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl">
                    <figure>
                        <img src={cardImg1} alt='card image'
                            className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-700'
                        />
                    </figure>
                    <div className="my-5">
                        <h2 className="text-2xl font-bold text-center">Yarn Dyeing</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl">
                    <figure>
                        <img src={cardImg1} alt='card image'
                            className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-700'
                        />
                    </figure>
                    <div className="my-5">
                        <h2 className="text-2xl font-bold text-center">Yarn Dyeing</h2>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl">
                    <figure>
                        <img src={cardImg1} alt='card image'
                            className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 duration-700'
                        />
                    </figure>
                    <div className="my-5">
                        <h2 className="text-2xl font-bold text-center">Yarn Dyeing</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalUnits;