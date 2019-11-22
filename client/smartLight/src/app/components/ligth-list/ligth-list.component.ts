import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligth-list',
  templateUrl: './ligth-list.component.html',
  styleUrls: ['./ligth-list.component.css']
})
export class LigthListComponent implements OnInit {

  public ligths: any = [{
    Name: "Kitchen Ligth",
    Id: '000001'
  },{
    Name: "Bathroom Ligth",
    Id: '000002'
  }];

  constructor() { }

  ngOnInit() {
  }

}
