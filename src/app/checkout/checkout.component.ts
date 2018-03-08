import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SenddataService} from '../services/senddata.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  details:FormGroup;
  device:any;
  products:any[]=[];
  quantity:any;
  check:boolean=false;
  constructor(private senddata:SenddataService) { 
    this.device=senddata.getData();
    this.quantity=senddata.getQuantity();
    //this.products[0]=this.device
    this.products.push(this.device);
    console.log("hello"+ this.quantity);
    //console.log(this.products[0].name);
  }

  ngOnInit() {
     this.details=new FormGroup({
       firstname: new FormControl('',Validators.required),
       lastname: new FormControl ('',Validators.required),
       email: new FormControl('',Validators.required),
       address: new FormControl('',Validators.required),
       country: new FormControl('',Validators.required),
       number: new FormControl('',Validators.required),
       zipcode: new FormControl('',Validators.required),
       state: new FormControl('',Validators.required),
       city: new FormControl('',Validators.required),
       
     })
     
    }

  saveUser(details){
    this.check=true;
    return this.check;
  }

  orderPlaced(){
    alert("Your Order is Placed");
  }


}
