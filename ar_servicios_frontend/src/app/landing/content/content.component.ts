import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from '../../responses/contact/contact.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContactComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  showContactForm: boolean = false; 

  constructor() {}

  showContact() {
    this.showContactForm = true; 
  }
}