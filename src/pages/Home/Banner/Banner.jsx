import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerBg1 from "../../../assets/banner/1.jpeg"
import bannerBg2 from "../../../assets/banner/2.jpeg"
import bannerBg3 from "../../../assets/banner/3.jpeg"
import bannerBg4 from "../../../assets/banner/4.jpeg"
import bannerBg5 from "../../../assets/banner/5.jpeg"


const Banner = () => {
    return (
        <div className="">
            <Carousel
                showStatus={false}
                showArrows={true}
                showThumbs={true}
                autoPlay
                infiniteLoop={true}
                swipeable={false}
                emulateTouch={true}
                //@ts-ignore
                animationHandler="fade"
            // transitionTime={5000}
            >
                <div>
                    <img src={bannerBg1} alt="img all" className="z-0" />
                </div>
                <div>
                    <img src={bannerBg2} alt="img" />
                </div>
                <div>
                    <img src={bannerBg3} alt="img" />
                </div>
                <div>
                    <img src={bannerBg4} alt="img" />
                </div>
                <div>
                    <img src={bannerBg5} alt="img" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;