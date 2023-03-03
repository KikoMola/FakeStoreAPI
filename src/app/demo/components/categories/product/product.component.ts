import { Component, Input } from '@angular/core';
import { Product } from 'src/app/demo/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product

  showProductInfo() {
    console.log(this.product)
  }

}
