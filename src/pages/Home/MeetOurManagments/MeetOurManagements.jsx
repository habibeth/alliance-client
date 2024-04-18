import CategoryBannerTitle from "../../Shared/CategoryBannerTitle/CategoryBannerTitle";
import mdSir from "../../../assets/md/md.png"

const MeetOurManagements = () => {
    return (
        <div className='mt-20 max-w-6xl md:mx-auto ml-5 mr-5'>
            <CategoryBannerTitle heading='meet our management' />
            <div className="flex flex-col justify-center items-center mt-10">
                <img src={mdSir} alt='mdSir' className='w-[300px] h-[300px] rounded-full bg-blue-700 pt-5' />
                <h2 className='text-2xl font-bold uppercase my-2'>Zaeem Ahmed</h2>
                <h2 className='text-xl font-medium'>Chairman & Managing Director</h2>
            </div>
            <p className='text-justify my-5'>This is my pleasure to welcome you all to the website of Alliance Group. This is an earnest endeavor from a talented and shining team of Alliance Group who made it possible for us to be here with you to help you get idea about what we are today. It would be my pleasure to share few of my words with you, the ones who are here to know about us. Alliance Group marked its footprints in the era of globalization with a clearer long-term strategic roadmap of getting into the place among market leaders in the field of composite knit industries with a deliberate assurance of the integration of state-of-the-art technology, skilled workforce including unparalleled leaders, quality products, innovative creations, responsiveness to core values that would pave the ways of the societies leading to the nation’s economic sustainability apart from maintaining win-win business strategy with the stakeholders or customers.</p>
            <div className="flex justify-end">
                <button className='btn btn-outline btn-info rounded-full'>Read More Message</button>
            </div>
        </div>
    );
};

export default MeetOurManagements;