import { Component, OnInit } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {

  constructor(private data: DulieuService, private route: ActivatedRoute, private router: Router) { }
  
  id: any;
  dataProject: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.data.getIDProject(this.id).subscribe(data => {
      this.dataProject = data      
    })
  }

  redirectListProject() {
    this.router.navigate(['list-project']);
  }

  editProject(dataProject: any) {
    // console.log(dataProject); 
    this.data.editProject(dataProject).subscribe(data => {
      alert('Sửa thành công!');
      this.redirectListProject()
    })
  }


}
