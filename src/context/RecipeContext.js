import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "",
    ingredient: "",
  });

  const [drinks, setDrinks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (filters.category === "" && filters.ingredient === "") return;
    const getRecipes = async ({ ingredient, category }) => {
      setIsFetching(true);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}`;
      const { data } = await axios.get(url);
      setDrinks(data.drinks);
      setIsFetching(false);
    };

    getRecipes(filters);
  }, [filters]);

  return (
    <RecipeContext.Provider
      value={{
        setFilters,
        drinks,
        isFetching,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
