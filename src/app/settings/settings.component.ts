import { Component } from '@angular/core';
import { MENU_SETTING } from './settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  data = MENU_SETTING;
  constructor(private router: Router,
  ) { }

  ngOnInit(): void { }

  // checkAuth(roleName: string): boolean {
  //   if (roleName === 'profile') {
  //     return true;
  //   } else {
  //     return this.authenticationService.existAuthorization(roleName);
  //   }
  // }

  goToRoute(route: string) {
    if (route === '/profile') {
      this.router.navigateByUrl(route);
    } else {
      this.router.navigate([route]);
    }
}
}
