import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryContentComponent } from './components/inventory-content/inventory-content.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MenuComponent },
  {path: 'inventory/:id', component: InventoryContentComponent},
  { path: '**', redirectTo: '/main' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routingComponents = [InventoryContentComponent, InventoryContentComponent];
