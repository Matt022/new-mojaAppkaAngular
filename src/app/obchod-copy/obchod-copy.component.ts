import { Component, OnInit, } from '@angular/core';
import { ProductService } from '../../Services/product-service.service';

import { OpravenaProduktovaClassa } from '../../SharedModels/opravenaProduktovaClassa.model';

@Component({
    selector: 'app-obchod-copy',
    templateUrl: './obchod-copy.component.html',
    styleUrls: ['./obchod-copy.component.scss'],
})
export class ObchodCopyComponent implements OnInit {
    constructor(private _productService: ProductService) { }

    productList: OpravenaProduktovaClassa[];
    newProductList: OpravenaProduktovaClassa[] = [];

    sortedArrayAZ: OpravenaProduktovaClassa[] = [];
    sortedArrayZA: OpravenaProduktovaClassa[] = [];

    hodnotaZmeny: boolean = false;


    zmenaPoradia: boolean = false;


    ngOnInit(): void {
        this._productService.getProductList().then((productsFromService: OpravenaProduktovaClassa[]) => {
            this.productList = productsFromService;
            this.newProductList = this.productList;
        }).catch((e: Error) => {
            console.error(e.message);
        });
    }

    // -----------------------------
    // pridávanie poslednej recenzie

    literallyLastReview: {
        name: string;
        date: string;
        productName: string;
    } = {
            name: '',
            date: '',
            productName: '',
        };

    addToAllReview(obj: { review: string; date: string; productName: string }): void {
        this.literallyLastReview.name = obj.review;
        this.literallyLastReview.date = obj.date;
        this.literallyLastReview.productName = obj.productName;
    }

    // ------------------------------------------------
    // filtrovanie produktov
    // funkcia na vyslanie alebo teda emitovanie zmien vo filter-options (nefunguje mi to podľa zadania)

    detekovanaZmena(naSklade: boolean): boolean {
        if (naSklade) {
            this.hodnotaZmeny = true;
            return naSklade = false;
        } else {
            this.hodnotaZmeny = false;
            return naSklade = true;
        }
    }

    filtraciaProduktov(items: OpravenaProduktovaClassa[]): void {
        this.newProductList = items;
    }

    // -------------------------------------------------
    // zoraďovanie produktov

    zoradenie(event: HTMLSelectElement): void {
        if (event.value == "Od A do Z") {
            this.zmenaPoradia = false;
        } else if (event.value == "Od Z do A") {
            this.zmenaPoradia = true;
        }
    }

    // --------------------------------------------------
    // odstránenie produktu
    deleteThisProduct(dataProduct: OpravenaProduktovaClassa) : void {

        const thatIndex = this.newProductList.findIndex((object) => {
            return object.id === dataProduct.id;
        });

        this.newProductList.splice(thatIndex, 1);
    }
}