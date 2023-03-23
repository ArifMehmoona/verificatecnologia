import { Component, Input } from '@angular/core';
import { veicolo } from './veicolo.model';
@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class veicoloComponent {
    @Input() veicolo:veicolo;
  
  ngOnInit() {}

}
