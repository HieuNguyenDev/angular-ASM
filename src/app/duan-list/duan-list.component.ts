import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

  projects: any;
  constructor(private data: DulieuService, private router: Router ) { }

  ngOnInit(): void {
    this.data.getProjects().subscribe(project => {
      this.projects = project;
    })
  }

  deleteProject(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa không?') == true) {
      this.data.deleteProject(id).subscribe(project => {
        alert('Xóa thành công!');
        this.ngOnInit();
      })
    }
  }

}

