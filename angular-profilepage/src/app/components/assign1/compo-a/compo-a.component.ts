import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompoBComponent } from '../compo-b/compo-b.component';
@Component({
  selector: 'app-compo-a',
  standalone: true,
  imports: [FormsModule,CompoBComponent],
  templateUrl: './compo-a.component.html',
  styleUrl: './compo-a.component.css'
})
export class CompoAComponent {

   valueA = '';
   sendData = '';
  valueFromB = '';


sendValueToB() {
  console.log(this.valueA);
  this.sendData = this.valueA;

}
receiveValueFromB(event: string){
  this.valueFromB = event;
}
}