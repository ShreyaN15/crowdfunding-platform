import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Campaigns.css";

import campaign1 from "../assets/campaign1.jpeg";
import campaign2 from "../assets/campaign2.jpeg";

const campaigns = [
  { id: 1, title: "Help Build a School", img: campaign1, desc: "Fundraising for school construction." },
  { id: 2, title: "Medical Aid for Children", img: campaign2, desc: "Providing healthcare support." }
];

const Campaigns = () => {
  return (
    <div className="campaigns-container">
      <h2>Active Campaigns</h2>
      <Swiper modules={[Pagination, Navigation]} spaceBetween={20} slidesPerView={1} navigation pagination={{ clickable: true }}>
        {campaigns.map((campaign) => (
          <SwiperSlide key={campaign.id}>
            <div className="campaign-card">
              <img src={campaign.img} alt={campaign.title} />
              <h3>{campaign.title}</h3>
              <p>{campaign.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Campaigns;
