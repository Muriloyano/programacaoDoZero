import { Component, OnInit } from '@angular/core';
import { TaskFilter } from "../task-filter/task-filter";
import { TaskService } from '../services/task';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router"; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskFilter, CommonModule, FormsModule, RouterModule], 
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

  constructor(
    private taskService: TaskService, 
    private router: Router
  ) { }

  allTasks: Array<Task> = [];
  filteredTasks: Array<Task> = [];
  newTask: Task = { id: 0, name: '', description: '', completed: false, dueDate: new Date() };

  currentDate: Date = new Date();
  daysInMonth: Array<any> = [];
  weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  monthNames: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.allTasks = this.taskService.getTasks();
    this.filteredTasks = [...this.allTasks];
    this.generateCalendar();
  }

  addTask() {
    if (typeof this.newTask.dueDate === 'string') {
      const dateString = this.newTask.dueDate as string;
      const parts = dateString.split('-'); 
      if(parts.length === 3) {
         this.newTask.dueDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      }
    }
    this.taskService.addTask(this.newTask);
    this.newTask = { id: 0, name: '', description: '', completed: false, dueDate: new Date() };
    this.refreshTasks();
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
    this.refreshTasks(); 
  }

  updateTask() {
    this.taskService.updateTask();
    this.generateCalendar();
  }

  filterTask(e: any) {
    const filter = e.target ? e.target.value : e;
    if (filter && filter.trim() !== '') {
      const term = filter.toLowerCase();
      this.filteredTasks = this.allTasks.filter(c => c.name.toLowerCase().includes(term));
    } else {
      this.filteredTasks = [...this.allTasks];
    }
  }

  openTaskDetails(task: Task) {
    this.router.navigate(['/taskDetails', task.id]);
  }

  generateCalendar() {
    this.daysInMonth = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      this.daysInMonth.push({ date: null, hasTask: false });
    }
    for (let i = 1; i <= totalDays; i++) {
      const dateToCheck = new Date(year, month, i);
      const hasTask = this.checkIfHasTask(dateToCheck);
      this.daysInMonth.push({ date: i, fullDate: dateToCheck, hasTask: hasTask });
    }
  }

  checkIfHasTask(date: Date): boolean {
    return this.allTasks.some(task => {
      const taskDate = new Date(task.dueDate);
      return taskDate.getDate() === date.getDate() &&
             taskDate.getMonth() === date.getMonth() &&
             taskDate.getFullYear() === date.getFullYear() &&
             !task.completed;
    });
  }
  
  changeMonth(offset: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.currentDate = new Date(this.currentDate);
    this.generateCalendar();
  }
}