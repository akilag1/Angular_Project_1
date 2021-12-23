import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[]=[new Recipe("Cheese Burger","Two cheese slices in both sides of beef","https://cdn.pixabay.com/photo/2017/11/02/06/55/burger-2910266_960_720.jpg")]; 

  constructor() { }

  ngOnInit(): void {
  }

}
