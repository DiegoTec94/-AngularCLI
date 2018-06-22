import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName :string;
  userPassword :string;
  verific:boolean;
  myUsers = [
    {name:"Diego", password:"12345"},
    {name:"Deniz", password:"12345"},
    {name:"Angel", password:"12345"}
  ];

  constructor (public router: Router)
  {
      
  }

  Showinformation(){
      console.log(this.userName +" "+ this.userPassword); 
     this.myUsers.filter((element)=>{
        if(element.name == this.userName && element.password == this.userPassword){
          this.verific=true;
          return 0;
        }
        else{
          this.verific=false;
          return 0;
        }
      });
      
      console.log(this.verific);

      if(this.verific)
      {
        this.router.navigateByUrl('Home');
      }
      else{
          alert("FAIL");
      }
      
  }


  ngOnInit() {
    
  }

}
