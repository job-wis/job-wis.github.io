import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { GoodCardComponent } from "./good-card/good-card.component";
import { PageGoodsComponent } from "./page-goods/page-goods.component";
import { PageLikeGoodsComponent } from "./page-like-goods/page-like-goods.component";
import { PageBasketGoodsComponent } from "./page-basket-goods/page-basket-goods.component";
import { GoodsServiceService } from "./shared/goods-service.service";
import { HeaderInfoComponent } from "./header-info/header-info.component";
import { FormsModule } from "@angular/forms";

import { PricePipe } from "./shared/price.pipe";
import { ModalAddToBasketComponent } from "./modal-add-to-basket/modal-add-to-basket.component";

import { ModalService } from "./modal.service";
import { NgxMaskModule } from "ngx-mask";
import { AliDatePipe } from "./shared/ali-date.pipe";
import { MomentModule } from "angular2-moment";
import { PoolDownComponent } from './pool-down/pool-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodCardComponent,
    PageGoodsComponent,
    PageLikeGoodsComponent,
    PageBasketGoodsComponent,
    HeaderInfoComponent,
    PricePipe,
    ModalAddToBasketComponent,
    AliDatePipe,
    PoolDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MomentModule
  ],
  providers: [GoodsServiceService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
