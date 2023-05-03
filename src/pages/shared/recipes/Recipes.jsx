import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ViewRecipes from "../display/ViewRecipes";
import { useEffect, useState } from "react";

const Recipes = () => {
  const [chef, setChef] = useState(null);
  const { id } = useParams();
  console.log("recipe", id);
  // const allChef = useLoaderData();
  const recipedata = useLoaderData();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/chef/${id}`);
      const json = await response.json();
      setChef(json);
    }

    // fetchData();
    // fetch(`http://localhost:5000/chef/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setChef(data));

    // const selectedChef = allChef.find((item) => item.id === id);
    // console.log(selectedChef);
  }, [id]);

  // const Chef = () => {
  //   const selectedChef = allChef.find((item) => item.id === id);
  //   console.log(selectedChef);
  // };
  // Chef();
  console.log(chef);
  return (
    <div>
      {/* <h5>len:{allChef.length}</h5> */}

      {/* <h4>this is recipe page </h4>
      {recipedata.map((item) => (
        <ViewRecipes key={item.id} recipes={item}></ViewRecipes>
      ))} */}
    </div>
  );
};

export default Recipes;
