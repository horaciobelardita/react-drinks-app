import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    maxHeight: 500,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
  },
}));

export const Drink = ({ idDrink, strDrink, strDrinkThumb }) => {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const { setRecipeId, recipe, isFetching } = useContext(ModalContext);

  const renderIngredients = (recipe) => {
    return Array.from(Array(15).keys()).map((index) => {
      let key = `strIngredient${index + 1}`;
      const ingredient = recipe[key];
      key = `strMeasure${index + 1}`;
      const quantity = recipe[key];
      return ingredient ? (
        <li key={ingredient}>
          {ingredient} {quantity}
        </li>
      ) : null;
    });
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h5 className="card-header">{strDrink}</h5>
        <img src={strDrinkThumb} alt={strDrink} className="img-fluid" />
        <div className="card-body">
          <button
            onClick={() => {
              setRecipeId(idDrink);
              handleOpen();
            }}
            type="button"
            className="btn btn-block btn-danger"
          >
            More...
          </button>
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={() => {
          handleClose();
          setRecipeId(null);
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          {isFetching || !recipe ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2 id="simple-modal-title">{recipe.strDrink}</h2>
              <div className="mt-2">
                <h4>Instructions</h4>
                <p id="simple-modal-description">
                  {recipe?.strInstructionsES ?? recipe.strInstructions}
                </p>
                <img
                  src={recipe.strDrinkThumb}
                  alt={recipe.strDrink}
                  className="img-fluid"
                />
              </div>
              <div className="mt-2">
                <h4>Ingredients</h4>
                <ul>{renderIngredients(recipe)}</ul>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};
