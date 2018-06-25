import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  Position = [{id:1 , name:"Practicante"},
  {id:2 , name:"Analista"},
  {id:3 , name:"Desarrollador"},
  {id:4 , name:"Desarrollador -O"},
  {id:5 , name:"Desarrollador -A"},
];

  constructor() { }

  getPosition(){
    return this.Position;
  }
}
