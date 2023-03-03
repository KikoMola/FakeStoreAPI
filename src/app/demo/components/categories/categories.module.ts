import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        CategoriesComponent,
        JewelryComponent,
        ElectronicsComponent,
        MenClothingComponent,
        WomenClothingComponent,
        ProductComponent,
    ],
    imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
