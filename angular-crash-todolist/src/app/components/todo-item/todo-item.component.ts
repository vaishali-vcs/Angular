import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo>;

  constructor(private todoService: TodoService)
  {
    this.todo = new Todo();
    this.deleteTodo = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses()
  {
      const classes = {
        todo: true,
        'is-completed': this.todo.completed
      };

      return classes;
  }

  onToggle(todo)
  {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe(todoitem =>
      console.log(todoitem));
  }

  onDelete(todo)
  {
    this.deleteTodo.emit(todo);
  }
}
