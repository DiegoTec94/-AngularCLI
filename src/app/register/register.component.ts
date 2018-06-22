import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  
  Position = [{id:1 , name:"Practicante"},
  {id:2 , name:"Analista"},
  {id:3 , name:"Desarrollador"},
  {id:4 , name:"Desarrollador -O"},
  {id:5 , name:"Desarrollador -A"},
];

  closeResult: string;
  nameUser :string;
  lastNameUser :string;
  positionUser :string;
  index :number;

  users = [
    {name:"Diego",lastname:"Serna", Position:this.Position[4].name},
    {name:"David",lastname:"Enrique", Position:this.Position[4].name},
    {name:"Juan",lastname:"Salazar", Position:this.Position[2].name}
  ];
 

    addUsers(){

      var newObject = 
      {
        name:this.nameUser,lastname:this.lastNameUser, Position:this.positionUser
      };

      if(this.index != null){
      this.users[this.index] = newObject;          
      this.index=null;
      this.nameUser="";
      this.lastNameUser=null;
      }
      else{
      this.users.push(newObject);
      this.nameUser="";
      this.lastNameUser=null;
      this.index=null;
      }

    }

    deleteUsers(index){
      
      this.users.splice(index,1);
     
    }
    
    changUser(ItemName, ItemCalft,i){
      this.nameUser=ItemName;
      this.lastNameUser=ItemCalft;
      this.index = i;
    }

    openBackDropCustomClass(content,i,username,userlastname,userposition) {
      this.nameUser=username;
      this.lastNameUser=userlastname;
      this.positionUser=userposition;
      this.index = i;
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop',  centered: true});
    }
  



  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}
