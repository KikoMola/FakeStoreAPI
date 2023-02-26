import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CategoriesComponent },
            { path: 'jewelry', component: JewelryComponent },
            { path: 'electronics', component: ElectronicsComponent },
            { path: 'men-clothing', component: MenClothingComponent },
            { path: 'women-clothing', component: WomenClothingComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}
