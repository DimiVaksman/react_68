import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import Inrecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './layout/layout';
import { RecipeForm } from './RecipeForm/RecipeForm';

// export const App = () => {
//   return (
//     <Layout>
//       <div>Recipe Form</div>
//       <RecipeList items={recipes} />
//       <GlobalStyle />
//       <div>Image Modal</div>
//     </Layout>
//   );
// };

export class App extends Component {
  state = {
    recipes: Inrecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe]
    }))
  }

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe}/>
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
