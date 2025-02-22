import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Donors.css"; // Ensure this file exists

const donors = [
  {
    id: 1,
    name: "John Doe",
    amount: "$500",
    message: "Proud to support this cause!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    amount: "$300",
    message: "Every small step makes a difference!",
    image: "https://via.placeholder.com/150",
  },
];

const Donors = () => {
  return (
    <div className="donors-container">
      <h2>Our Top Donors</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {donors.map((donor) => (
          <SwiperSlide key={donor.id}>
            <div className="donor-card">
              <img src={donor.image} alt={donor.name} />
              <h3>{donor.name}</h3>
              <p>Donated: {donor.amount}</p>
              <p className="message">"{donor.message}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Donors;
