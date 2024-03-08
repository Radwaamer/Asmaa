import React from "react";
import Title from "./Title";
import Cards from "./Cards";
import Pagination from "../../components/Pagination";

const Content = () => {
  return (
    <div className="content">
      <Title />
      <Cards />
      <Pagination />
    </div>
  );
};

export default Content;
