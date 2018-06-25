import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { PositionService } from '../position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class RegisterComponent implements OnInit {
  
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

      if(this.index != null){
    //this.users[this.index] = newObject;  
      this.userService.updateUserIndex(this.index,newObject);   
      this.index=null;
      this.nameUser="";
      this.lastNameUser=null;
      }
      else{
    //this.users.push(newObject);
      this.userService.addUsers(newObject);
      this.nameUser="";
      this.lastNameUser=null;
      this.index=null;
      }

    }

    deleteUsers(index){
      
    this.userService.deleteUserIndex(index);
     
    }
    
    changUser(ItemName, ItemCalft,i){
      this.nameUser=ItemName;
      this.lastNameUser=ItemCalft;
      this.index = i;
    }
    
    indexNew = [];
    openBackDropCustomClass(content,i,username,userlastname,userposition) {
      this.nameUser=username;
      this.lastNameUser=userlastname;
      this.positionUser=userposition;
      this.index = i;
      this.indexNew[0] = i;
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop',  centered: true});
    }
   // updateData(){
     // this.router.navigateByUrl('Update/'+this.index);
   // }
  
    //#region 
    userComponent = [];
    positionComponent = [];
   
    //#endregion

  constructor(public router: Router,private modalService: NgbModal, public userService : UserService, public positionService :PositionService) {
    this.userComponent = userService.getUsers();
    this.positionComponent = positionService.getPosition();
    }

  ngOnInit() {
  }

}
