import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PositionService } from '../position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  pos: number;
  usersComponent = {name:"",lastname:"",Position:""};

  closeResult: string;
  nameUser :string;
  lastNameUser :string;
  positionUser :string;
  index :number;

  addUsers(){

    var newObject = 
    {
      name:this.nameUser,lastname:this.lastNameUser, Position:this.positionUser
    };

    if(this.pos != null){
  //this.users[this.index] = newObject;  
    this.userService.updateUserIndex(this.pos,newObject);   
    this.index=null;
    this.nameUser="";
    this.lastNameUser=null;

    this.router.navigateByUrl('Register');
    }
  }

  //#region 
  positionComponent = [];
  //#endregion
  constructor(public router: Router,public activatedRoute: ActivatedRoute, public userService: UserService, public positionService :PositionService) { 

    this.pos = this.activatedRoute.snapshot.params['id'];
    this.usersComponent = userService.getUserid(this.pos);

    this.nameUser = this.usersComponent.name;
    this.lastNameUser =this.usersComponent.lastname;
       this.positionUser = this.usersComponent.Position;
    
    console.log(this.usersComponent.name);
    console.log(this.pos);
    this.positionComponent = positionService.getPosition();
  }


  ngOnInit() {
  }

}
