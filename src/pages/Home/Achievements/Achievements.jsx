import { FaCertificate, FaCheckCircle, FaHeart, FaStar } from "react-icons/fa";
import CategoryBannerTitle from "../../Shared/CategoryBannerTitle/CategoryBannerTitle";

const Achievements = () => {
    return (
        <div className="mt-20 max-w-6xl md:mx-auto ml-5 mr-5">
        <CategoryBannerTitle heading="We are so proud of" />
        <div className="grid grid-cols-2 md:grid-cols-4 bg-blue-700 mt-10">
            <div className="text-center border-r-2 border-white my-7 py-2 px-5 text-white">
                <div className="flex justify-center text-3xl">
                    <FaCheckCircle />
                </div>
                <h2 className="text-4xl font-semibold mt-2 mb-5">5 Star</h2>
                <p>State of the art printing and AOP solution</p>
            </div>
            <div className="text-center md:border-r-2 border-white my-7 py-2 px-5 text-white">
                <div className="flex justify-center text-3xl">
                    <FaCertificate />
                </div>
                <h2 className="text-4xl font-semibold mt-2 mb-5">99% +</h2>
                <p>Achievement in on time delivery</p>
            </div>

            <div className="text-center border-r-2 border-white my-7 py-2 px-5 text-white">
                <div className="flex justify-center text-3xl">
                    <FaHeart />
                </div>
                <h2 className="text-4xl font-semibold mt-2 mb-5">20 +</h2>
                <p>Clients who run International brands</p>
            </div>
            <div className="text-center my-7 py-2 px-5 text-white">
                <div className="flex justify-center text-3xl">
                    <FaStar />
                </div>
                <h2 className="text-4xl font-semibold mt-2 mb-5">5 Star</h2>
                <p>Empowered with 60% self-inspection and lab accreditation</p>
            </div>
        </div>
    </div>
    );
};

export default Achievements;