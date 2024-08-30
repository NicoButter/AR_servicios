import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './landing/header/header.component'; 
import { ContentComponent } from './landing/content/content.component';
import { LocationComponent } from './landing/location/location.component';
import { FooterComponent } from './landing/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    ContentComponent,
    LocationComponent,
    FooterComponent
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ar_servicios_frontend';
}
