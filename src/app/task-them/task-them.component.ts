import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {

  constructor(private data: DulieuService, private router: Router) { }

  projects: any;
  employees: any;
  tasks: any;
  frm1!: FormGroup;

  ngOnInit(): void {
    
    this.frm1 = new FormGroup({
      nameTask: new FormControl('', [Validators.required, Validators.minLength(4)]),
      moTa: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
      project: new FormControl(' ', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
      employee: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    });

    this.data.getProjects().subscribe(project => {
      this.projects = project;
    });

    this.data.getEmployees().subscribe(employee => {
      this.employees = employee;
    })

    this.data.getTasks().subscribe(task => {
      this.tasks = task;
    })
  }

  nameTask: string = '';
  descriptionTask: string = '';
  nameProject: string = '';
  duAnID: any;
  nhanVienID: any;

  redirectListTask() {
    this.router.navigate(['list-task']);
  }
  
  addTask(task: any) {
    this.data.addTask(task).subscribe(task => {
      alert('Thêm thành công!');    
      this.redirectListTask()  
    })
  }


}
