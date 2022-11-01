import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { StatistickyProdukt } from '../../SharedModels/statistickyProdukt.model';
import { ProductService } from '../../Services/product-service.service';

@Component({
    selector: 'app-statistika-predaja',
    templateUrl: './statistika-predaja.component.html',
    styleUrls: ['./statistika-predaja.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class StatistikaPredajaComponent implements AfterViewInit {
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: MatTableDataSource<StatistickyProdukt> = new MatTableDataSource<StatistickyProdukt>([]);

    displayedColumns: string[] = [
        'id',
        'name',
        'price',
        'stockCount',
        'obrat_mesiac',
        'obrat_obdobie'
    ];

    private _vsetkyProdukty: StatistickyProdukt[] = this._productService.getStatistickeProdukty();

    constructor(private _productService: ProductService) {

    }

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource(this._vsetkyProdukty);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    // ---------------------------------------------------------------------------------
    // všetky obraty za mesiac
    obratyZaMesiac: number = this._productService.obratyZaMesiac();

    //  všetky obraty za obdobie
    obratyZaObdobie: number = this._productService.obratyZaObdobie();

    //  priemerná cena predávaných produktov
    priemernaCena: number = this._productService.priemernaCena();

    // najpredavanejší produkt
    najpredavanejsiProdukt: string = this._productService.najpredavanejsiProdukt();
}


