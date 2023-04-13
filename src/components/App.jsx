import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import {Layout} from './layout/layout'

export const App = () => {
  return (
    <Layout>
      <div>Recipe Form</div>
      <RecipeList items={recipes} />
      <GlobalStyle />
      <div>Image Modal</div>
    </Layout>
  );
};
