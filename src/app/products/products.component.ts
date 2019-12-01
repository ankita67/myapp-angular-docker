import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[]

  constructor(private service:ProductService) 
  { }

  ngOnInit() {
    this.service
    .getproducts()
    .subscribe(response=>{
      if(response['status']==='success')
      {
        this.products=response['data'] as any[] 

      }
      else
      {
        console.log('error',response['error'])
      }
    })
  }

}
