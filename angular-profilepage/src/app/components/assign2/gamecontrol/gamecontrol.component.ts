import { Component, Output,EventEmitter } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';
import {MatFabButton} from '@angular/material/button'

@Component({
  selector: 'app-gamecontrol',
  standalone: true,
  imports: [EvenComponent,OddComponent,MatFabButton],
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GamecontrolComponent {
@Output() numberemitted = new EventEmitter<number>();
count=0;
intervalid:any;


startgame(){
  this.intervalid=setInterval(() => {
    this.count++;
    this.numberemitted.emit(this.count);
  }, 1000);
}

stopgame(){
clearInterval(this.intervalid);
}

}
