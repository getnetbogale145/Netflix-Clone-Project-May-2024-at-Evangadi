import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Rowlist from "../../components/Rows/RowList/Rowlist";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
};

export default Home;
