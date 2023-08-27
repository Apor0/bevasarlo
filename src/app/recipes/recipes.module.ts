import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
    ],
  exports: [
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ]
})

export class RecipesModule {}