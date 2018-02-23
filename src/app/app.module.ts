import { SocketService } from './services/socket.service';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';

import { InventoryService } from './services/inventory.service';
import { ProductsService } from './services/products.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { InventoryContentComponent } from './components/inventory-content/inventory-content.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryContentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSemanticModule,
    HttpModule,
    AppRoutingModule
    ],
  providers: [ProductsService, InventoryService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
