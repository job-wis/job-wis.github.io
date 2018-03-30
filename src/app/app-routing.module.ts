import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGoodsComponent } from './page-goods/page-goods.component';
import { PageGoodComponent } from './page-good/page-good.component';
import { PageLikeGoodsComponent } from './page-like-goods/page-like-goods.component';
import { PageBasketGoodsComponent } from './page-basket-goods/page-basket-goods.component';


const routes: Routes = [

  { path: '', component: PageGoodsComponent },
  { path: 'goods', component: PageGoodsComponent },
  { path: 'goods/:id', component: PageGoodComponent },
  { path: 'likegoods', component: PageLikeGoodsComponent },
  { path: 'basket', component: PageBasketGoodsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
