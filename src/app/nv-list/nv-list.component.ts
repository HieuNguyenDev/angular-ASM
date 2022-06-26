import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {
  employees: any;

  constructor(private data: DulieuService, private router: Router) { }

  ngOnInit(): void {
    this.data.getEmployees().subscribe(employee => {
      this.employees = employee;
    })
  }

  deleteEmployee(id: number) {
    if (confirm('Bạn có chắc muốn xóa không?') == true) {
      this.data.deleteEmployee(id).subscribe(employee => {
        alert('Xóa thành công!');
        this.ngOnInit();
      })
    }
  }

  redirectEditEmployee() {
    this.router.navigate(['edit-employee']);
  }

}
