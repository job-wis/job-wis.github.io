import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GoodsServiceService } from "../shared/goods-service.service";
import "rxjs/add/operator/map";

@Component({
  selector: "wis-page-basket-goods",
  templateUrl: "./page-basket-goods.component.html",
  styleUrls: ["./page-basket-goods.component.css"]
})
export class PageBasketGoodsComponent implements OnInit {
  textToSend: string;

  rForm: FormGroup;
  name: string = "";
  phone: string = "";
  email: string = "";
  adress: string = "";
  comment: string = "";

  constructor(public gS: GoodsServiceService, private fb: FormBuilder) {
    this.rForm = fb.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ])
      ],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12)
        ])
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ])
      ],
      adress: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ])
      ],
      comment: [null, Validators.required],
      validators: ""
    });
  }

  ngOnInit() {}

  deleteFromBasket(item) {
    this.gS.deleteFromBasket(item);
  }

  addToLike(record) {
    this.gS.addToLike(record.good);
    this.gS.deleteFromBasket(record);
  }

  changeCount(item, count) {
    if (item.count + count > 0) this.gS.addToBasket(item.good, Number(count));
  }

  changeStatus(e, good) {
    this.gS.changeStatus(good);
  }

  deleteMarked() {
    this.gS.getBasket().subscribe(basket => {
      let _basket = basket
        .filter(rec => rec.status)
        .forEach(rec => this.gS.deleteFromBasket(rec));
    });
  }

  sendToAPI(_value) {
    this.gS.getBasket().subscribe(basket => {
      let _basket = basket
        .filter(rec => rec.status)
        .map(rec => ({ id: rec.good.id, count: rec.count }));
      this.textToSend = JSON.stringify({ payer: _value, basket: _basket });
      this.deleteMarked();
    });
  }
}
