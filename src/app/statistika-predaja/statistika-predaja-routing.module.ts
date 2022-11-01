import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeniNaSkladeComponent } from './neni-na-sklade/neni-na-sklade.component';
import { StatistikaPredajaComponent } from './statistika-predaja.component';

const routes: Routes = [
    { path: '', component: StatistikaPredajaComponent},
    { path: "doskladnit", component: NeniNaSkladeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatistikaPredajaRoutingModule { }
