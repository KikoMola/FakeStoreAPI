import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/interfaces/product';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss']
})
export class JewelryComponent implements OnInit {
  constructor(public http: HttpClient) {

  }

  products!: Product[]

  ngOnInit(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products/category/jewelery').subscribe(
      res => {
        this.products = res
      }
    )
  }

}
