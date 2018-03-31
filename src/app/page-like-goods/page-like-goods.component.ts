import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../goods-service.service";

@Component({
  selector: "wis-page-like-goods",
  templateUrl: "./page-like-goods.component.html",
  styleUrls: ["./page-like-goods.component.css"]
})
export class PageLikeGoodsComponent implements OnInit {
  likeList: any[];
  constructor(private gS: GoodsServiceService) {}

  ngOnInit() {
    this.gS.getLike().subscribe(liketList => (this.likeList = liketList));
  }
}
