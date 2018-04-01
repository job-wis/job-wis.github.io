import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "../shared/modal.service";
import { GoodsServiceService } from "../shared/goods-service.service";

@Component({
  selector: "app-modal-add-to-basket",
  templateUrl: "./modal-add-to-basket.component.html",
  styleUrls: ["./modal-add-to-basket.component.css"]
})
export class ModalAddToBasketComponent implements OnInit {
  @Input() modalIsVisible;
  count: number;
  good: any;
  cb: any;

  constructor(private mS: ModalService, private gS: GoodsServiceService) {
    this.mS["addToBasketDlg"] = this;
  }

  ngOnInit() {}

  //Метод компонента визуализирующий диалог и сохраняющий функцию обратного вызова в случае нажатия добавления в корзину */
  show(good, _cb?: any) {
    this.count = 1;
    this.good = good;
    this.cb = _cb;
    this.modalIsVisible = true;
  }

  close(e?: any) {
    if (!e || e.target.classList.contains("overlay")) {
      this.modalIsVisible = false;
    }
  }

  /*
  Методы только для формы добавления в корзину
  */

  appendToBasket() {
    this.gS.addToBasket(this.good, this.count, err => console.log(err));
    if (this.cb) this.cb();
    this.close();
  }
}
