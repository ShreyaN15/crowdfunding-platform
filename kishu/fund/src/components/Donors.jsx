import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Donors.css";

import donor1 from "../assets/donor1.jpeg";
import donor2 from "../assets/donor2.jpeg";

const donors = [
  { id: 1, name: "John Doe", img: donor1, desc: "Donated $500 for education." },
  { id: 2, name: "Jane Smith", img: donor2, desc: "Contributed to medical aid." }
];

const Donors = () => {
  return (
    <div className="donors-container">
      <h2>Top Donors</h2>
      <Swiper modules={[Pagination, Navigation]} spaceBetween={20} slidesPerView={1} navigation pagination={{ clickable: true }}>
        {donors.map((donor) => (
          <SwiperSlide key={donor.id}>
            <div className="donor-card">
              <img src={donor.img} alt={donor.name} />
              <h3>{donor.name}</h3>
              <p>{donor.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Donors;
