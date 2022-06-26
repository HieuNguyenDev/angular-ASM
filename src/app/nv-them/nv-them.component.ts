import { Component, OnInit } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {

  constructor(private data: DulieuService, private router: Router) { }

  ngOnInit(): void {
  }

  nameEmployee: string = '';
  dateOfBirthEmployee: string = '';
  phoneNumber: string = '';

  redirectListEmployee() {
    this.router.navigate(['list-employee'])
  }

  addEmployee(employee: any) {
    this.data.addEmployee(employee).subscribe(employee => {
      alert('Thêm thành công!');
      this.redirectListEmployee();
    })
  }

}
