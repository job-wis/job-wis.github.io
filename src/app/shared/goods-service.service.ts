import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/operator/delay";

import { goodsArray } from "./testData";

@Injectable()
export class GoodsServiceService {
  basketList: any[];
  likeList: any[];

  constructor() {
    this.getBasket().subscribe(basket => {
      this.basketList = basket;
    });
    this.getLike().subscribe(like => (this.likeList = like));
  }

  getGoods() {
    return Observable.of(goodsArray).delay(100);
  }

  getBasket() {
    return Observable.of(JSON.parse(localStorage.getItem("basket") || "[]"));
  }

  basketSum() {
    return this.basketList.reduce((a, b) => {
      return a + b.count * b.good.price;
    }, 0);
  }

  saveBasket(basket) {
    this.basketList = basket;
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  saveLike(like) {
    this.likeList = like;
    localStorage.setItem("like", JSON.stringify(like));
  }

  getLike() {
    return Observable.of(JSON.parse(localStorage.getItem("like") || "[]"));
  }

  addToBasketExt(good: any, _count: number, _status: any, cb?: any) {
    this.getBasket().subscribe(basket => {
      let _fRec = basket.find(item => item.good.id == good.id);
      basket = basket.filter(item => item.good.id != good.id);
      basket.push({
        good: good,
        date: new Date(),
        status: _status === "!" ? !_fRec.status : _status,
        count: Number(_fRec != undefined ? _fRec.count : 0) + Number(_count)
      });
      this.saveBasket(basket);
      if (cb) cb();
    });
  }

  addToBasket(good: any, _count: number, cb?: any) {
    this.addToBasketExt(good, _count, true, cb);
  }

  changeStatus(good) {
    this.addToBasketExt(good, 0, "!");
  }

  deleteFromBasket(record) {
    this.getBasket().subscribe(basket => {
      basket = basket.filter(item => item.good.id != record.good.id);
      this.saveBasket(basket);
    });
  }

  addToLike(good: any) {
    let like = JSON.parse(localStorage.getItem("like") || "[]");
    if (undefined === like.find(item => item.good.id == good.id)) {
      like.push({ good: good, date: new Date() });
      this.saveLike(like);
    }
  }
  deleteFromLike(good) {
    console.log(good);
    let like = JSON.parse(localStorage.getItem("like") || "[]");
    like = like.filter(item => item.good.id != good.id);
    this.saveLike(like);
  }
}
