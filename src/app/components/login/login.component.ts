import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {
    empId : '',
    password : ''
  }

  token:String = '';

  constructor(private loginService : LoginService) { }


  ngOnInit(): void {    
  }
  
  formSubmit(){
    this.loginService.login(this.userData).subscribe(
      (res:any)=>{
        console.log(res);
        this.token = res;
      },(error)=>{
        console.log(error);
      } 
    )
  }

}
