import { Component, OnInit, Inject } from '@angular/core';
import { JsondataService } from '../services/jsondata.service';
import { HttpClient } from '@angular/common/http';
import { SenddataService } from '../services/senddata.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  productdata: any;
  constructor(private getservice: JsondataService, private http: HttpClient, private senddata: SenddataService,
    private router: Router, public dialog: MatDialog) { }
  name: string;
  price: string;



  ngOnInit() {
    this.getservice.getData()
      .subscribe(data => {
        this.productdata = data
        console.log(this.productdata);
        console.log(this.productdata[0]);
      });
      let atag = document.getElementById("maindiv").getElementsByTagName("a");
      console.log(" %c This page have "+atag.length+" anchor tag in it",'color:red; font-size:20px');
      let buttontag = document.getElementById("maindiv").getElementsByTagName("img");
      console.log(" %c This page have "+buttontag.length+" image tag in it",'color:blue; font-size:20px');

      
      
  }
  buyNow(product,quantity) {
    this.senddata.saveData(product);
    this.senddata.saveQuantity(quantity);
    this.router.navigate(['checkout']);

    console.log(quantity);
  }
  animal;
  openDialog(product): void {
    let dialogRef = this.dialog.open(Modal, {
      width: '600px',
      data: { name: product.name, path: product.path, price: product.price }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     this.animal = result;
    });
  }

}
@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class Modal {
  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ,private senddata: SenddataService, private router:Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  buyNow(data) {
    this.senddata.saveData(data);
    this.router.navigate(['checkout']);
    this.dialogRef.close();
  }

}
