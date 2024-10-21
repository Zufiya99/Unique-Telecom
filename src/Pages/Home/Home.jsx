import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreItems from "../../Components/ExploreItems/ExploreItems";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ExploreItems category={category} setCategory={setCategory} />
    </>
  );
};

export default Home;
