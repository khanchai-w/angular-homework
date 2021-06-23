import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ["./category-menu.component.css"]
})
export class CategoryMenuComponent{
  @Input()
  title: string;


  constructor(){}

}
