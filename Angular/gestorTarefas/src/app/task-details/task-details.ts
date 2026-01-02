import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Task } from '../models/task';
import { TaskService } from '../services/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails implements OnInit {

  task?: Task;
  dateString: string = ''; 

  constructor(
    private route: ActivatedRoute, 
    private taskService: TaskService, 
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.task = this.taskService.getById(+id);
      
      if (this.task && this.task.dueDate) {
         const d = new Date(this.task.dueDate);
         d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
         this.dateString = d.toISOString().slice(0, 16);
      }
    } else {
      this.navigateBack();
    }
  }

  save() {
    if (this.task) {
        if(this.dateString) {
            this.task.dueDate = new Date(this.dateString);
        }
        
        this.taskService.updateTask(); 
        this.navigateBack(); 
    }
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/taskList']);
  }
}