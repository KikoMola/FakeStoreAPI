import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/interfaces/product';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  constructor(public http: HttpClient) {

  }

  products!: Product[]

  ngOnInit(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products/category/electronics').subscribe(
      res => {
        this.products = res
        console.log(res)
      }
    )
  }

}
