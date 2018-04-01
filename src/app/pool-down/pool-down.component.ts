import { Component, OnInit, Input } from "@angular/core";
import { GoodsServiceService } from "../shared/goods-service.service";
import { ModalService } from "../shared/modal.service";
import { Router } from "@angular/router";

@Component({
  selector: "wis-pool-down",
  templateUrl: "./pool-down.component.html",
  styleUrls: ["./pool-down.component.css"]
})
export class PoolDownComponent implements OnInit {
  @Input("isVisible") isVisible;

  constructor(
    private gS: GoodsServiceService,
    private mS: ModalService,
    private router: Router
  ) {
    this.mS["poolDown"] = this;
  }

  ngOnInit() {}

  show() {
    this.isVisible = true;
  }

  close(e?: any) {
    if (!e || e.target.classList.contains("overlay")) {
      this.isVisible = false;
    }
  }

  toLikeList() {
    this.close();
    this.router.navigate(["/like"]);
  }
}
