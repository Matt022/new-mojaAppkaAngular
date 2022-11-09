import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../Services/product-service.service';

import { OpravenaProduktovaClassa } from '../../SharedModels/opravenaProduktovaClassa.model';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';

@Component({
    selector: 'app-obchod-copy',
    templateUrl: './obchod-copy.component.html',
    styleUrls: ['./obchod-copy.component.scss'],
})
export class ObchodCopyComponent implements OnInit {
    constructor(private _productService: ProductService, private _dialog: MatDialog) { }

    sourceList: OpravenaProduktovaClassa[] = [];
    newProductList: OpravenaProduktovaClassa[] = [];

    sortedArrayAZ: OpravenaProduktovaClassa[] = [];
    sortedArrayZA: OpravenaProduktovaClassa[] = [];

    hodnotaZmeny: boolean = false;

    zmenaPoradia: boolean = false;

    ngOnInit(): void {
        this._productService.getProductList().then((productsFromService: OpravenaProduktovaClassa[]) => {
            this.newProductList = productsFromService;
            this.sourceList = productsFromService;
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

    addToAllReview(obj: { review: string; date: string; productName: string; }): void {
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
    deleteThisProduct(dataProduct: OpravenaProduktovaClassa): void {
        this.newProductList = this.newProductList.filter(element => element.id !== dataProduct.id);

        this._productService.deleteThisProduct(dataProduct);
    }

    addNewProductDialog() {
        const dialogRef = this._dialog.open(NewProductFormComponent, {
            width: '90vw',
            height: '95vh',
            maxWidth: '90vw',
            maxHeight: '95vh',
            panelClass: 'full-screen-modal',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}