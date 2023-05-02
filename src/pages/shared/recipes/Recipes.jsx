import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();
  console.log("recipe", id);
  const recipedata = useLoaderData();
  return (
    <div>
      {recipedata.length}
      <h4>this is recipe page </h4>
    </div>
  );
};

export default Recipes;
