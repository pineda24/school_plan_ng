import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit {

  expanded: boolean
  constructor() { 
    this.expanded = true;
  }

  ngOnInit(): void {
  }

}
