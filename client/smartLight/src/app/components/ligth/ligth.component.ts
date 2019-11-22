import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ligth',
  templateUrl: './ligth.component.html',
  styleUrls: ['./ligth.component.css']
})
export class LigthComponent implements OnInit {

  @Input()
  ligth: any;
  
  constructor() { }

  ngOnInit() {
  }

}
