import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent }   from './chat/chat.component';

const appRoutes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
