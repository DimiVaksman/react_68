import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import Inrecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './layout/layout';
import { RecipeForm } from './RecipeForm/RecipeForm';



// render => componentDidMount => getItem => setState => update => render => componentDidUpdate => setItem

export class App extends Component {
  state = {
    recipes: Inrecipes,
  };

  componentDidMount(){
   const saveRecipes = localStorage.getItem('recipes')
   if(saveRecipes !== null){
    // если сохранили в лс уже что-то, пишем ето в state
    this.setState({
      recipes: JSON.parse(saveRecipes)
    })
   }
   else{
    // Если в лс ничего еще нет, пишем в state Inrecipes
    this.setState({
      recipes: Inrecipes
    })
   }

  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.recipes !== this.state.recipes)
localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
  }

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
