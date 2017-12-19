import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'chat',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
