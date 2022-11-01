import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ObchodCopyComponent } from './obchod-copy.component';
import { ProduktCopyComponent } from './produkt-copy/produkt-copy.component';
import { RecenzieComponent } from './produkt-copy/recenzie/recenzie.component';
import { ProduktDetailComponent } from './produkt-copy/produkt-detail/produkt-detail.component';
import { FilterComponent } from './filter/filter.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { MatarialovyModulModule } from '../../Modules/matarialovy-modul.module';
import { ObchodCopyRoutingModule } from './obchod-copy-routing.module';
import { SortPipePipe } from '../../Pipes/sort-pipe.pipe';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';

@NgModule({
    declarations: [
        ObchodCopyComponent,
        ProduktCopyComponent,
        RecenzieComponent,
        ProduktDetailComponent,
        FilterComponent,
        FilterOptionsComponent,
        SortPipePipe,
        NewProductFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatarialovyModulModule,
        ObchodCopyRoutingModule,
    ]
})
export class ObchodCopyModule { }
