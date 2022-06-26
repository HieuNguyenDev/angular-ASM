import { Component, OnInit, Output } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

  nameEmployee = '';
  dateOfBirthEmployee = '';
  phoneNumber = '';

  constructor(private data: DulieuService, private route: ActivatedRoute, private router: Router) { }


  id: any;
  dataEmployees: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.data.getIDEmployee(this.id).subscribe(data => {
      this.dataEmployees = data      
    })
  }

  redirectListProject() {
    this.router.navigate(['list-employee']);
  }

  editEmployee(dataProject: any) {
    // console.log(dataProject); 
    this.data.editEmployee(dataProject).subscribe(data => {
      alert('Sửa thành công!');
      this.redirectListProject()
    })
  }

}
