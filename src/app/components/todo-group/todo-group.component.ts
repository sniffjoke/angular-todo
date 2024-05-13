import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoGroup} from "../../interfaces/todo-group.interface";
import {NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {ItemNotStartedComponent} from "../todo-item/item-not-started/item-not-started.component";
import {ItemDoneComponent} from "../todo-item/item-done/item-done.component";
import {ItemInProgressComponent} from "../todo-item/item-in-progress/item-in-progress.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [
    // TodoItemBaseComponent,
    NgForOf,
    ItemNotStartedComponent,
    ItemDoneComponent,
    ItemInProgressComponent,
    NgSwitch,
    NgSwitchCase,
    FormsModule
  ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.scss'
})
export class TodoGroupComponent implements OnInit {

  @Input() todoGroup!: TodoGroup
  @Input() index!: number

  @Output() changeTitleEvent: EventEmitter<{value: string, index: number}> = new EventEmitter<{value: string, index: number}>()

  public isShowTitle = true

  public groupTitle?: string

  ngOnInit():void {
    this.groupTitle = this.todoGroup.title
    if (this.todoGroup.title === "") {
      this.isShowTitle = false
    }
  }

  public onEnterValue(): void {
    this.isShowTitle = true

    this.changeTitleEvent.emit({
      value: this.groupTitle!,
      index: this.index
    })
  }

}
