import { Routes } from '@angular/router';
import { ContactComponent } from './responses/contact/contact.component'; 
import { ContentComponent } from './landing/content/content.component';


export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
