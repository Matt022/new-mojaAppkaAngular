import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistikaPredajaComponent } from './statistika-predaja.component';
import { NeniNaSkladeComponent } from './neni-na-sklade/neni-na-sklade.component';
import { StatistikaPredajaRoutingModule } from './statistika-predaja-routing.module';
import { MatarialovyModulModule } from '../../Modules/matarialovy-modul.module';



@NgModule({
    declarations: [
        StatistikaPredajaComponent,
        NeniNaSkladeComponent
    ],
    imports: [
        CommonModule,
        StatistikaPredajaRoutingModule,
        MatarialovyModulModule
    ]
})
export class StatistikaPredajaModule { }
