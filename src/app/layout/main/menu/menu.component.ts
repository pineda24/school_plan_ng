import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  constructor(
    // private securityService: SecurityService,
    // public data: DataService,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    // this.securityService.logout();
  }

}
