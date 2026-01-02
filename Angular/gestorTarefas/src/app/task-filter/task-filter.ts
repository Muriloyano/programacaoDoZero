import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
})
export class TaskFilter {

  filter: string = '';

  @Output() filterEvent = new EventEmitter<string>();

  filterTask() {
    this.filterEvent.emit(this.filter);
  }
}