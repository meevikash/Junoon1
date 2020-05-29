import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { AboutComponent } from './modules/about/about.component';
import { RegisterComponent } from './modules/register/register.component';
import { SlickComponent } from './modules/slick/slick.component';
import { SponsorsComponent } from './modules/sponsors/sponsors.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent},
    {
    path: 'posts',
    component: PostsComponent},
    {
    path: 'gallery',
    component: GalleryComponent},
    {
    path: 'contact',
    component: ContactsComponent},
    {
    path: 'about',
    component: AboutComponent},
    {
    path: 'register',
    component: RegisterComponent},
    {
    path: 'slick',
    component: SlickComponent},
    {
    path: 'sponsors',
    component: SponsorsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
