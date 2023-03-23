import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
}
Array() {
  this.veicolo.sort((a, b) => b.velocitamax - a.velocitamax);
}

stampArraylento(){
  this.veicolo.sort((a,b) => a.velocitamax - b.velocitamax )
}