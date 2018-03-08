import { Injectable } from '@angular/core';

@Injectable()
export class SenddataService {

  constructor() { }

  mobile: any;
  quantity: number;

  saveData(product) {
    this.mobile = product;

  }
  getData() {
    return this.mobile;
  }
  saveQuantity(quantity) {
    this.quantity = quantity;
  }
  getQuantity() {
    return this.quantity;
  }
}
