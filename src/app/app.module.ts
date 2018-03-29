import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodCardComponent } from './good-card/good-card.component';
import { GoodsLikeComponent } from './goods-like/goods-like.component';
import { GoodLikeCardComponent } from './good-like-card/good-like-card.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsListComponent,
    GoodCardComponent,
    GoodsLikeComponent,
    GoodLikeCardComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
