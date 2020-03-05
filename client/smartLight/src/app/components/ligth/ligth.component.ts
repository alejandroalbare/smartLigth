import { Component, OnInit, Input } from '@angular/core';
import { LigthService } from './../../services/ligth.service';

@Component({
  selector: 'app-ligth',
  templateUrl: './ligth.component.html',
  styleUrls: ['./ligth.component.css']
})
export class LigthComponent implements OnInit {

  private state: boolean = true;

  @Input()
  ligth: any;

  constructor(private _ligthService: LigthService) { }

  ngOnInit() {
  }

  turnLigth() {
    this._ligthService.turn(!this.state).subscribe((res) => {
      console.log(res);
      this.state = !this.state
    },
      (err) => {
        console.log(err);
      });
  }

}
