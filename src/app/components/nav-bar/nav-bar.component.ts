import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  isLogined: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuthorized()) {
      this.isLogined = true;
    }
  }

  onLogout() {
    this.authService.logout();
    this.isLogined = false;
  }

}
