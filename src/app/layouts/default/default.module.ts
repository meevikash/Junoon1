import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ContactsComponent } from 'src/app/modules/contacts/contacts.component';
import { GalleryComponent } from 'src/app/modules/gallery/gallery.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { SlickComponent } from 'src/app/modules/slick/slick.component';
import { SponsorsComponent } from 'src/app/modules/sponsors/sponsors.component';



@NgModule({
  declarations: [
    DefaultComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    RegisterComponent,
    SlickComponent,
    SponsorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
