import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/interfaces/product';
@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss']
})
export class MenClothingComponent implements OnInit {
  constructor(public http: HttpClient) {

  }

  products!: Product[]

  ngOnInit(): void {
    this.http.get<Product[]>(`https://fakestoreapi.com/products/category/men's%20clothing`).subscribe(
      res => {
        this.products = res
      }
    )
  }
}
