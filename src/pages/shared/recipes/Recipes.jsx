import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ViewRecipes from "../display/ViewRecipes";
import { useEffect, useState } from "react";
import ChefBanner from "../display/ChefBanner";

const Recipes = () => {
  const [chef, setChef] = useState(null);
  const { id } = useParams();
  // console.log("recipe", id);
  // const allChef = useLoaderData();
  const recipedata = useLoaderData();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://b7a10-chef-recipe-hunter-server-side-nazmul906-nazmul906.vercel.app/chef/${id}`
      );
      const json = await response.json();
      setChef(json);
    }

    fetchData();
    // fetch(`http://localhost:5000/chef/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setChef(data));
  }, [id]);

  return (
    <div>
      <ChefBanner chef={chef}></ChefBanner>
      <div>
        {recipedata.map((item) => (
          <ViewRecipes key={item.recipeId} recipes={item}></ViewRecipes>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
