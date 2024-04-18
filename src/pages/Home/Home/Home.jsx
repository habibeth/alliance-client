import Achievements from "../Achievements/Achievements";
import Banner from "../Banner/Banner";
import IntroCard from "../IntroCard/IntroCard";
import MeetOurManagements from "../MeetOurManagments/MeetOurManagements";
import NewsHeadline from "../NewsHeadline/NewsHeadline";
import OurClients from "../OurClients/OurClients";
import OurValues from "../OurValues/OurValues";
import OurVisionMission from "../OurVisionMission/OurVisionMission";
import TotalUnits from "../TotalUnits/TotalUnits";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewsHeadline></NewsHeadline>
            <IntroCard></IntroCard>
            <TotalUnits></TotalUnits>
            <OurVisionMission></OurVisionMission>
            <OurValues></OurValues>
            <MeetOurManagements></MeetOurManagements>
            <Achievements></Achievements>
            <OurClients></OurClients>
        </div>
    );
};

export default Home;