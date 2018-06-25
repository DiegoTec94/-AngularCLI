import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {name:"Diego",lastname:"Serna", Position:"Desarrollador -A"},
    {name:"David",lastname:"Enrique", Position:"Desarrollador"},
    {name:"Juan",lastname:"Salazar", Position:"Desarrollador"}
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  addUsers(user){
    this.users.push(user);
  }

  updateUserIndex(index , newUser){
    this.users[index] = newUser;  
  }

  deleteUserIndex(index){
     this.users.splice(index,1); 
  }

  getUserid(id){
    return this.users[id];
  }
  
}
