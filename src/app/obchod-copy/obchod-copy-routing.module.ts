import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { ObchodCopyComponent } from './obchod-copy.component';
import { ProduktDetailComponent } from './produkt-copy/produkt-detail/produkt-detail.component';


const routes: Routes = [
    { path: '', component: ObchodCopyComponent },
    { path: 'produkt/:id', component: ProduktDetailComponent },
    { path: 'formular', component: NewProductFormComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObchodCopyRoutingModule { }
