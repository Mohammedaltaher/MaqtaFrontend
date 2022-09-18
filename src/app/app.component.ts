import { Component } from '@angular/core';
import { AuthService } from './modules/Auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTest Application';
  constructor( public authService: AuthService,
  ) { }


  logout() {
    this.authService.doLogout()
  }

  
}
