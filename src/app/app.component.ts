import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodoGroupComponent} from "./components/todo-group/todo-group.component";
import {TodoGroup, TodoStatus} from "./interfaces/todo-group.interface";

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
            description: 'Создаем Todo Angular стрим',
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
      title: ''
    }

    this.todoGroups.push(tempGroup)
  }

  public handleChangeTitle(value: {value: string, index: number}): void {
    this.todoGroups[value.index].title = value.value
  }
}
