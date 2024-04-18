// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


import client1 from "../../../assets/clients/US-polo.png"
import client2 from "../../../assets/clients/henbury.png"
import client3 from "../../../assets/clients/kappa.png"
import client4 from "../../../assets/clients/kenneth-cole.png"
import client5 from "../../../assets/clients/lpp.png"
import client6 from "../../../assets/clients/new-yourker.png"
import client7 from "../../../assets/clients/weatherproof.png"
import CategoryBannerTitle from '../../Shared/CategoryBannerTitle/CategoryBannerTitle';

const OurClients = () => {
    return (
        <div className="mt-20 max-w-6xl md:mx-auto ml-5 mr-5">
            <CategoryBannerTitle heading="Our Valued Clients" />
            <div className="mt-10">
                <Swiper
                    breakpoints={{
                        640: {
                            // width: 576,
                            slidesPerView: 2,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 6,
                        },
                    }}
                    // slidesPerView={6}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="mb-10">
                        <img src={client1} alt="client" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <img src={client2} alt="client" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <img src={client3} alt="client" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <img src={client4} alt="client" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <img src={client5} alt="client" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <img src={client6} alt="client" />
                    </SwiperSlide>
                    <SwiperSlide className="mb-10">
                        <img src={client7} alt="client" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurClients;