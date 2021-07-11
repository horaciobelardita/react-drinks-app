import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [recipeId, setRecipeId] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    if (!recipeId) return;
    const getRecipeDetails = async () => {
      setIsFetching(true);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const {
        data: { drinks },
      } = await axios.get(url);

      setRecipe(drinks[0]);
      setIsFetching(false);
    };
    getRecipeDetails();
  }, [recipeId]);
  return (
    <ModalContext.Provider value={{ setRecipeId, isFetching, recipe }}>
      {children}
    </ModalContext.Provider>
  );
};
