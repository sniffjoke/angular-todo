import { Component } from '@angular/core';
import {TodoItemBaseComponent} from "../todo-item-base/todo-item.base.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-done.component.html',
  styleUrl: './item-done.component.scss'
})
export class ItemDoneComponent extends TodoItemBaseComponent {

}
