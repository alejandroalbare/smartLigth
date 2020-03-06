import { Component, OnInit, Input } from '@angular/core';
import { LigthService } from './../../services/ligth.service';

@Component({
  selector: 'app-ligth',
  templateUrl: './ligth.component.html',
  styleUrls: ['./ligth.component.css']
})
export class LigthComponent implements OnInit {

  private state: boolean;

  @Input()
  ligth: any;

  constructor(private _ligthService: LigthService) { }

  ngOnInit() {
    this._ligthService.getStatus().subscribe((res: any) => {
      console.log(res);
      this.state = res.status;
    })
  }

  turnLigth() {
    this._ligthService.turn(!this.state).subscribe((res) => {
      this.state = !this.state
    },
      (err) => {
        throw "server error";
      });
  }

}
