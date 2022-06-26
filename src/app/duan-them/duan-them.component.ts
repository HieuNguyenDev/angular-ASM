import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

  nameProject = '';
  dateProject = '';
  priceProject = 0;
  nameLeader = '';
  member = '';
  employees: any;

  constructor( private data: DulieuService, private router: Router) { }

  ngOnInit(): void {
    this.data.getEmployees().subscribe(employee => {
      this.employees = employee;
    });
  }

  redirectListProject() {
    this.router.navigate(['list-project']);
  }


  addProject(project: any) {
    this.data.addProject(project).subscribe(project => {
      alert('Thêm thành công!');
      this.redirectListProject();
    })
  }
  

}
