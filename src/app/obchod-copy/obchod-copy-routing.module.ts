import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObchodCopyComponent } from './obchod-copy.component';
import { ProduktDetailComponent } from './produkt-copy/produkt-detail/produkt-detail.component';


const routes: Routes = [
    { path: '', component: ObchodCopyComponent },
    { path: 'produkt/:id', component: ProduktDetailComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObchodCopyRoutingModule { }
