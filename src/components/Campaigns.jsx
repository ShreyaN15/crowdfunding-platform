import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Campaigns.css"; // Ensure this file exists

const campaigns = [
  {
    id: 1,
    title: "Help Build a School",
    description: "Support education for underprivileged children.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Medical Aid for Children",
    description: "Providing free medical care for kids in need.",
    image: "https://via.placeholder.com/300",
  },
];

const Campaigns = () => {
  return (
    <div className="campaigns-container">
      <h2>Ongoing Campaigns</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {campaigns.map((campaign) => (
          <SwiperSlide key={campaign.id}>
            <div className="campaign-card">
              <img src={campaign.image} alt={campaign.title} />
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Campaigns;
