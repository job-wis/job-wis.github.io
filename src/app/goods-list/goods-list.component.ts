import { Component, OnInit } from '@angular/core';
import { GoodsServiceService } from '../goods-service.service';

@Component({
  selector: 'wis-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  goods:any [];

  constructor( private goodsSource: GoodsServiceService) { }

  ngOnInit() {
    this.goodsSource.getGoods().subscribe( goods => { 
      this.goods = goods; 
    } );
  }

}
