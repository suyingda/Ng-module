import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor() { }
  public getOrderList():Array<any>{
    return [
      {orderId:'111',userName:'大漠傻叉'},
      {orderId:'222',userName:'大漠傻叉'},
      {orderId:'333',userName:'大漠傻叉'},
      {orderId:'444',userName:'大漠傻叉'},
      {orderId:'555',userName:'大漠傻叉'},
      {orderId:'666',userName:'大漠傻叉'},
      {orderId:'777',userName:'大漠傻叉'},
      {orderId:'888',userName:'大漠傻叉'},
      {orderId:'999',userName:'大漠傻叉'},
    ]
  }

}
