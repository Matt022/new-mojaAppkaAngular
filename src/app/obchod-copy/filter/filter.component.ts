import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { OpravenaProduktovaClassa } from '../../../SharedModels/opravenaProduktovaClassa.model';
import { ProductService } from 'src/Services/product-service.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    searchTerm: string = '';
    resultSet: string[] = [];
    private _poleProduktov: OpravenaProduktovaClassa[];

    @Output() outputovanieProduktov: EventEmitter<OpravenaProduktovaClassa[]> = new EventEmitter();

    constructor(private _produktService: ProductService) {

    }

    ngOnInit(): void {
        this._produktService.getProductList().then((productList: OpravenaProduktovaClassa[]) => {
            this._poleProduktov = productList;
        }).catch((e: Error) => {
            console.error(e.message);
        });
    }

    /*
        filtrovanie produktov
        - pri ngOnInit v obchod-copy componente sa načítajú všetky produkty
        - ak je searchTerm alebo teda input prázdny, nedeje sa nič
        - ak má input dĺžku viac alebo rovné číslu 2, tak vtedy sa filtrujú produkty na základe zhody výskytu v inpute a v produktliste
        - filtrované hodnoty sa prepisujú vo funckii na to určenej v obchod-copy componente
    */

    filtrovanie(someValue: string): void {
        const result: string[] = [];
        const resultProduct: OpravenaProduktovaClassa[] = [];

        if (this.searchTerm.length >= 2) {
            this._poleProduktov.forEach((item: OpravenaProduktovaClassa) => {
                if (item.name.toLowerCase().includes(someValue.toLowerCase())) {
                    result.push(item.name);
                    resultProduct.push(item);
                    this.outputovanieProduktov.emit(resultProduct);
                }
            });
            this.resultSet = result;
        } else {
            this.resultSet = [];
            this.outputovanieProduktov.emit(this._poleProduktov);
        }
    }
}
