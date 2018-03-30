import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';

@Injectable()
export class GoodsServiceService {

  constructor() { }


  getGoods(){

    return Observable.of([
      { id: "1", name: "Apple Iphone 5S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "2", name: "Apple Iphone 6",  price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "3", name: "Apple Iphone 6S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "4", name: "Apple Iphone 5S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "5", name: "Apple Iphone 6",  price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "6", name: "Apple Iphone 6S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "7", name: "Apple Iphone 5S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "8", name: "Apple Iphone 6",  price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "9", name: "Apple Iphone 6S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "10", name: "Apple Iphone 5S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "11", name: "Apple Iphone 6",  price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  },
      { id: "12", name: "Apple Iphone 6S", price: "59100", imageUrlSmall: "assets/apple-iphone-w64.jpg", imageUrlMedium: "assets/apple-iphone-w150.jpg", imageUrlNormal: "assets/apple-iphone-w300.jpg", imageUrlBig: "assets/apple-iphone-w600.jpg",  }
     ]).delay(100);
  };

  addToBasket( good: any ) {
    let basket = JSON.parse(localStorage.getItem('basket') || "[]");
    basket.push( good );
    localStorage.setItem('basket', JSON.stringify( basket ));
  };

  addToLike( good: any ) {
    let like = JSON.parse(localStorage.getItem('like') || "[]");
    like.push( good );
    localStorage.setItem('like', JSON.stringify( like ));

  } ;

}
