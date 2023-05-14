import { Component, OnInit, ElementRef, ViewChild, HostListener, ViewChildren, AfterViewInit } from "@angular/core";
import { Router } from '@angular/router';
// import * as $ from 'jquery';  
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {



  constructor(
    private router: Router
    ) {}

  async ngOnInit() {
  }
}
