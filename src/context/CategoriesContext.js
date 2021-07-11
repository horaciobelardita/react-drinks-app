import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const {
        data: { drinks },
      } = await axios.get(API_URL);
      setCategories(drinks);
    };
    console.log(
      "🚀 ~ file: CategoriesContext.js ~ line 17 ~ getCategories ~ getCategories"
    );
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
