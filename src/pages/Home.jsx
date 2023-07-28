import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer"
import Galleryhome from "../component/galleryhome/GalleryHome";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Galleryhome/>
      <Footer className='relative top-10 hidden' />
    </>
  );
};

export default Home;
