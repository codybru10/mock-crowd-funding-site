import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListingsComponent } from './listings/listings.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
