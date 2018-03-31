import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { GoodsListComponent } from "./goods-list/goods-list.component";
import { GoodCardComponent } from "./good-card/good-card.component";
import { GoodsLikeComponent } from "./goods-like/goods-like.component";
import { GoodLikeCardComponent } from "./good-like-card/good-like-card.component";
import { AddDialogComponent } from "./add-dialog/add-dialog.component";
import { PageGoodsComponent } from "./page-goods/page-goods.component";
import { PageLikeGoodsComponent } from "./page-like-goods/page-like-goods.component";
import { PageBasketGoodsComponent } from "./page-basket-goods/page-basket-goods.component";
import { GoodsServiceService } from "./goods-service.service";
import { PageGoodComponent } from "./page-good/page-good.component";
import { HeaderInfoComponent } from "./header-info/header-info.component";
import { FormsModule } from "@angular/forms";
import { PricePipe } from "./price.pipe";
import { ModalAddToBasketComponent } from "./modal-add-to-basket/modal-add-to-basket.component";

import { ModalService } from "./modal.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsListComponent,
    GoodCardComponent,
    GoodsLikeComponent,
    GoodLikeCardComponent,
    AddDialogComponent,
    PageGoodsComponent,
    PageLikeGoodsComponent,
    PageBasketGoodsComponent,
    PageGoodComponent,
    HeaderInfoComponent,
    PricePipe,
    ModalAddToBasketComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [GoodsServiceService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
