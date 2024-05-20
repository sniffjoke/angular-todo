import { Component } from '@angular/core';
import {TodoItemBaseComponent} from "../todo-item-base/todo-item.base.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-in-progress.component.html',
  styleUrl: './item-in-progress.component.scss'
})
export class ItemInProgressComponent extends TodoItemBaseComponent {

}
