import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email: string = ''; 
  message: string = ''; 

  constructor() {}

  sendEmail() {
    if (this.validateEmail(this.email) && this.message) {
      console.log('Email enviado:', this.email);
      console.log('Mensaje:', this.message);

      this.email = '';
      this.message = '';
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
