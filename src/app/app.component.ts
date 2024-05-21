import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodoGroupComponent} from "./components/todo-group/todo-group.component";
import {TodoGroup, TodoItem, TodoStatus} from "./interfaces/todo-group.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todoGroups: TodoGroup[]

  constructor() {
    this.todoGroups = [
      {
        title: 'ToDo',
        items: [
          {
            title: 'Создать Todo',
            description: 'Создаем Todo Angular стрим',
            status: TodoStatus.IN_PROGRESS
          },
          {
            title: 'Сделать вторую часть',
            description: 'Создаем еще что-то',
            status: TodoStatus.NOT_STARTED
          },
          {
            title: 'Смонтировать и выложить на канал',
            description: 'fjwkjisaoewjdk',
            status: TodoStatus.DONE
          }
        ]
      }
    ]
  }
  public addGroup(): void {
    let tempGroup: TodoGroup = {
      title: '',
      items: []
    }

    this.todoGroups.push(tempGroup)
  }

  public handleChangeTitle(value: {value: string, index: number}): void {
    this.todoGroups[value.index].title = value.value
  }

  public handleDeleteGroup(value: number) {
    this.todoGroups.splice(value, 1)
  }

  public handleNewItem(value: {item: TodoItem, index: number}) {
    this.todoGroups[value.index].items.push(value.item)
  }

  public handleChangeDescription(value: {description: string, indexGroup: number, indexItem: number}) {
    this.todoGroups[value.indexGroup].items[value.indexItem].description = value.description
  }

  public handleChangeStatus(value: {status: TodoStatus, indexItem: number, groupIndex: number}): void {
    this.todoGroups[value.groupIndex].items[value.indexItem].status = value.status
  }

  public handleDeleteItem(value: {indexItem: number, indexGroup: number}): void {
    this.todoGroups[value.indexGroup].items.splice(value.indexItem, 1)
  }
}
