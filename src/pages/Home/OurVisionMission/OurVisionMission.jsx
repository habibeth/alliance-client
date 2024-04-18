import CategoryBannerTitle from "../../Shared/CategoryBannerTitle/CategoryBannerTitle";


const OurVisionMission = () => {
    return (
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl md:mx-auto ml-5 mr-5 mt-20">
            <div className="shadow-2xl rounded-2xl py-10 px-7">
                <CategoryBannerTitle heading="Our Mission" />
                <p className="text-justify mt-10 text-indigo-700">We strive an elite lifestyle for the clients across the apparel markets with the innovation & newness by compound effect of highly motivated and skilled human resources to add values to the sourcing. Keeping the ethics & compliance in mind.</p>
            </div>
            <div className="shadow-2xl rounded-2xl py-10 px-7">
                <CategoryBannerTitle heading="Our Vision" />
                <p className="text-justify mt-10 text-indigo-700">To be a role model of sustainable apparel industry in the globe for the clothing brands and retain the impactful footprints towards the success story for Human civilizations more decisively.​</p>
            </div>
        </div>
    );
};

export default OurVisionMission;