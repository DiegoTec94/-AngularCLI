import { Component, OnInit  } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // google maps zoom level
   zoom: number = 15;
  
   // initial center position for the map
   lat: number = 25.675819;
   lng: number = -100.41679299999998;
 
   clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
   }
   
   mapClicked($event: MouseEvent) {
     this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       draggable: true
     });
   }
   
   markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
   }
   
   markers: marker[] = [
     {
       lat: 25.675819,
       lng: -100.41679299999998,
       label: 'N',
       draggable: false
     },
   ]
 }
 
 // just an interface for type safety.
 interface marker {
   lat: number;
   lng: number;
   label?: string;
   draggable: boolean;
 }


