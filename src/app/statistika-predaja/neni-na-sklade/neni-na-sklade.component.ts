import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ProductService } from 'src/Services/product-service.service';

import { StatistickyProdukt } from 'src/SharedModels/statistickyProdukt.model';

@Component({
    selector: 'app-neni-na-sklade',
    templateUrl: './neni-na-sklade.component.html',
    styleUrls: ['./neni-na-sklade.component.scss']
})
export class NeniNaSkladeComponent implements AfterViewInit {
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

    private _nedostupneProdukty = this._productService.getNedostupneProdukty();

    constructor(private _productService: ProductService) {

    }

    ngAfterViewInit(): void {
        this.dataSource = new MatTableDataSource(this._nedostupneProdukty);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
