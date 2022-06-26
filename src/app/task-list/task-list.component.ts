import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: any;
  employees: any;
  projects: any;
  
  constructor( private data: DulieuService, private router: Router) { }

  ngOnInit(): void {
    this.data.getTasks().subscribe(task => {
      this.tasks = task;
    })

    this.data.getEmployees().subscribe(employee => {
      this.employees = employee
    })

    this.data.getProjects().subscribe(project => {
      this.projects = project
    })
  }

  deleteTask(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa không!') == true) {
      this.data.deleteTask(id).subscribe(task => {
        alert('Xóa thành công');
        this.ngOnInit()
      })
    }
  }

  redirectEditTask() {
    this.router.navigate(['edit-task']);
  }
}
