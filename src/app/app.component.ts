import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { remult } from "remult"
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
  constructor(zone: NgZone) {
    remult.apiClient.wrapMessageHandling = handler => zone.run(() => handler())
  }
}
