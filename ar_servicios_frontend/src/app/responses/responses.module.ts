import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactComponent
  ],
  exports: [
    ContactComponent
  ]
})
export class ResponsesModule { }
