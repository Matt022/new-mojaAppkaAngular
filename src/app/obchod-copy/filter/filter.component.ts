import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { OpravenaProduktovaClassa } from '../../../SharedModels/opravenaProduktovaClassa.model';


@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnChanges {
    searchTerm: string = '';
    resultSet: string[] = [];
    @Input() _poleProduktov: OpravenaProduktovaClassa[];

    @Output() outputovanieProduktov: EventEmitter<OpravenaProduktovaClassa[]> = new EventEmitter();

    ngOnChanges(): void {
        this.filtrovanie(this.searchTerm);
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
