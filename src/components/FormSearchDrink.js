import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipeContext } from "../context/RecipeContext";
import { useForm } from "../hooks/useForm";

export const FormSearchDrink = () => {
  const { categories } = useContext(CategoriesContext);
  const { setFilters, isFetching } = useContext(RecipeContext);

  const renderOptions = (categories) =>
    categories.map(({ strCategory }) => (
      <option value={strCategory} key={strCategory}>
        {strCategory}
      </option>
    ));

  const [{ ingredient, category }, handleInputChange] = useForm({
    ingredient: "",
    category: "",
  });

  return (
    <form
      className="col-12 mt-3"
      onSubmit={(e) => {
        e.preventDefault();
        setFilters({
          ingredient,
          category,
        });
      }}
    >
      <fieldset className="py-2">
        <legend className="text-center">
          Search drink by category or ingredient
        </legend>
      </fieldset>
      <div className="form-row">
        <div className="col-md-4">
          <input
            type="text"
            name="ingredient"
            value={ingredient}
            onChange={handleInputChange}
            placeholder="Ingredient.."
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            value={category}
            onChange={handleInputChange}
            id=""
            className="form-control"
          >
            <option value="">Select a category</option>
            {renderOptions(categories)}
          </select>
        </div>
        <div className="col-md-4">
          <button disabled={isFetching} className="btn btn-block btn-danger">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
