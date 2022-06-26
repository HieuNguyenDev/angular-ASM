import { Component, OnInit } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {

  nameTask = '';
  descriptionTask = '';
  projects: any;
  tasks: any;
  employees: any;
  dataTask: any;
  id: any;
  nameProject: any;

  constructor(private data: DulieuService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.data.getProjects().subscribe(project => {
      this.projects = project; 
    }) 

    this.data.getTasks().subscribe(task => {
      this.tasks = task;
    })

    this.data.getEmployees().subscribe(employee => {
      this.employees = employee;
    })

    this.id = this.route.snapshot.params['id'];
    this.data.getIDTask(this.id).subscribe(data => {
      this.dataTask = data      
    })
    this.forProjects()
  }

  forProjects() {
    for (let project of this.projects) {
      if (this.dataTask.id === project.id) {
        this.nameProject = project;
        console.log(this.nameProject);
      }
    }
  }

  redirectListTask() {
    this.router.navigate(['list-task']);
  }

  editTask(task: any) {
    this.data.editTask(task).subscribe(data => {
      alert('Sửa thành công!');
      this.redirectListTask()
    })
  }

}
