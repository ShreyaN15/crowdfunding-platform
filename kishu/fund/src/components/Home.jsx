import React from "react";
import { Link } from "react-router-dom"; // For navigation
import { Carousel, Card, Button } from "react-bootstrap"; // Bootstrap Components
import img1 from "../assets/camp.png";
import img2 from "../assets/camp2.jpeg";


const Home = () => {
    console.log("Home Component Loaded");
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center mt-4">
        <h1>Welcome to Crowdfunding</h1>
        <p>Build your crowdfunding platform with ease.</p>
        <div className="mt-3">
          <Link to="/donate">
            <Button variant="primary" className="mx-2">Donate Now</Button>
          </Link>
          <Link to="/start-campaign">
            <Button variant="success" className="mx-2">Start a Campaign</Button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="text-center mt-5 p-4 bg-light">
        <h2>About Us</h2>
        <p>We empower projects through community support. Join us to fund and get funded.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus itaque dicta adipisci beatae, quas, dolorem alias fuga cumque, iure numquam qui quisquam eum tempora laboriosam perspiciatis ex molestias accusantium.</p>
      </section>

      {/* Campaign Slider */}
      <section className="mt-5 p-4">
        <h2 className="text-center">Trending Campaigns</h2>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Campaign 1" />
            <Carousel.Caption>
              <h3>Save the Environment</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Campaign 2" />
            <Carousel.Caption>
              <h3>Help a Family in Need</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Quick Navigation Cards */}
      <section className="mt-5 d-flex justify-content-center gap-4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Explore Campaigns</Card.Title>
            <Card.Text>Find projects to support.</Card.Text>
            <Link to="/campaigns">
              <Button variant="primary">View Campaigns</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>View Donors</Card.Title>
            <Card.Text>See those making a difference.</Card.Text>
            <Link to="/donors">
              <Button variant="primary">View Donors</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Start a Campaign</Card.Title>
            <Card.Text>Launch your funding journey.</Card.Text>
            <Link to="/start-campaign">
              <Button variant="primary">Get Started</Button>
            </Link>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Home;
