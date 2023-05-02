import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../display/ChefCard";

const Chef = () => {
  const allChef = useLoaderData();

  return (
    <div>
      <h5>Chef from different country......</h5>
      {allChef.length}
      {allChef.map((item) => {
        <ChefCard key={item.id} chef={item}></ChefCard>;
      })}
    </div>
  );
};

export default Chef;
