import React from "react";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const allChef = useLoaderData();

  return (
    <div>
      <h5>Chef from different country......</h5>
      {allChef.length}
    </div>
  );
};

export default Chef;
