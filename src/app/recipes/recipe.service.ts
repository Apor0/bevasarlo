import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[]=[
  //   new Recipe(
  //     'Schnitzel',
  //     'schnitzel with fries',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KN_vaXat9kpJiil2tx-WN4yA0XKKbUz9IRjklTOvig&s',
  //       [
  //         new Ingredient('Meat', 1),
  //         new Ingredient('Bag of fries', 1), 
  //       ]),
  //   new Recipe(
  //     'Burger',
  //     'a burger',
  //     'https://media.istockphoto.com/id/1448322070/photo/fresh-tasty-burger-on-wood-table.webp?b=1&s=612x612&w=0&k=20&c=EcZtAo9YEL1RWFgyPvK-1CIWq3ufeLxebmxVdUOD5gk=',
  //       [
  //         new Ingredient('Buns', 2),
  //         new Ingredient('Meat', 1), 
  //       ])
  // ];

  private recipes: Recipe[] = [];

  constructor( private slService: ShoppingListService){}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}