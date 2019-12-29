import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent }, { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }, { path: 'settings', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, { path: 'settings', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'settings', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) }, { path: 'settings', loadChildren: () => import('./combos/combos.module').then(m => m.CombosModule) }, { path: 'settings', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }, { path: 'settings', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
