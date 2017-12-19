import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { MarketplaceComponent }   from './marketplace/marketplace.component';
=======
// import { WelcomeComponent } from './welcome/welcome.component';
// import { AboutComponent }   from './about/about.component';
// import { MarketplaceComponent }   from './marketplace/marketplace.component';
// import { AlbumDetailComponent }   from './album-detail/album-detail.component';
>>>>>>> master
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
<<<<<<< HEAD
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'admin',
=======
    path: '',
>>>>>>> master
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
