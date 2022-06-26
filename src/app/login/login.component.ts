import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as moment  from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private auth:AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  xulyDN(data:any){    
    console.log(data, data.un , data.pw);
    this.auth.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          alert("Đăng nhập thành công!");
          // this.router.navigate(['list-project'])        
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        alert('Bạn sai tên đăng nhập hoặc mật khẩu!');
        this.router.navigateByUrl('/login');
      }
    )
  } 

}
