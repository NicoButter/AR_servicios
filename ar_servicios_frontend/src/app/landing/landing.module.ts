import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    ContentComponent,
    LocationComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    LocationComponent,
    FooterComponent 
  ]
})
export class LandingModule { }
