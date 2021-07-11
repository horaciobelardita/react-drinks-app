import { Header } from "./components/Header";
import { FormSearchDrink } from "./components/FormSearchDrink";
import { DrinkList } from "./components/DrinkList";
import { CategoriesProvider } from "./context/CategoriesContext";
import { RecipeProvider } from "./context/RecipeContext";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <>
      <Header />
      <CategoriesProvider>
        <RecipeProvider>
          <ModalProvider>
            <div className="bg-light min-vh-100">
              <div className="container">
                <div className="row">
                  <FormSearchDrink />
                </div>
                <DrinkList />
              </div>
            </div>
          </ModalProvider>
        </RecipeProvider>
      </CategoriesProvider>
    </>
  );
}

export default App;
