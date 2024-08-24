import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatToolbarModule,MatIconModule,MatButtonModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = '';
  password = '';
  errormsg = '';
  isLoggedIn = false;
  constructor(private router: Router) {}
  submitCredentials() {
    const validUsername = this.username === 'doshant';
    const validPassword = this.password === '123456';

    if (validUsername && validPassword) {
      this.isLoggedIn = true;
      this.router.navigate(['app-body']);
    } else {
      this.errormsg='Credentials are wrong';
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.username='';
    this.password='';
    this.router.navigate(['/']);
  }

}
