import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Information from "./Information";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Information></Information>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Home;
