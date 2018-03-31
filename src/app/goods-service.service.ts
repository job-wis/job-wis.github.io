import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/operator/delay";

import { goodsArray } from "./testData";

@Injectable()
export class GoodsServiceService {
  constructor() {}

  getGoods() {
    return Observable.of(goodsArray).delay(100);
  }

  getBasket() {
    return Observable.of(JSON.parse(localStorage.getItem("basket") || "[]"));
  }

  getLike() {
    return Observable.of(JSON.parse(localStorage.getItem("like") || "[]"));
  }

  addToBasket(good: any) {
    let basket = JSON.parse(localStorage.getItem("basket") || "[]");
    basket.push(good);
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  deleteFromBasket() {}

  addToLike(good: any) {
    let like = JSON.parse(localStorage.getItem("like") || "[]");
    like.push(good);
    localStorage.setItem("like", JSON.stringify(like));
  }
  deleteFromLike() {}
}
