import React from "react";
import Announcement from "../../components/Announcement";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Trending from "../../components/Trending";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Header />
      <Trending />
      <Footer />
    </div>
  );
};

export default Home;
