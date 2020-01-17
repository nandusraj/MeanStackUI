import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={username:'',password:''}

  constructor(private service:UserService) { }  
  ngOnInit() {
  }
  login(){
    if(this.user.username!=''&&this.user.password!='')
    {
      this.service.login(this.user).subscribe(
        (res:any)=>{
          console.log(res);        
        },
        (err)=>{
          console.log(err);
        }
      );
    }
    else{
      alert('Please fill out all the fields');
    }
  }


}
