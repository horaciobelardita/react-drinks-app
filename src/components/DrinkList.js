import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Drink } from "./Drink";

export const DrinkList = () => {
  const { drinks } = useContext(RecipeContext);
  return (
    <div className="row mt-5">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} {...drink} />
      ))}
    </div>
  );
};
