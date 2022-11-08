import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/Services/product-service.service';

import { OpravenaProduktovaClassa } from '../../../../SharedModels/opravenaProduktovaClassa.model';
import { ShoppingService } from 'src/Services/shopping-service.service';
import { NewProductFormComponent } from '../../new-product-form/new-product-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-produkt-detail',
    templateUrl: './produkt-detail.component.html',
    styleUrls: ['./produkt-detail.component.scss'],
})
export class ProduktDetailComponent implements OnInit, OnDestroy {
    hladanePole: OpravenaProduktovaClassa;
    @Output() allReviews = new EventEmitter<{ review?: string; date: string; productName: string; }>();


    private _hladaneId: number;
    private _subscription: Subscription;

    constructor(private _route: ActivatedRoute, private _productService: ProductService, private _shoppingService: ShoppingService, private _dialog: MatDialog) { }

    ngOnInit(): void {
        //  zachytávanie route parametru po kliknutí na zobraziť detaily
        this._subscription = this._route.paramMap.subscribe((p: ParamMap) => {
            const id = p.get('id')!;

            this._hladaneId = +id;

            this._productService.getProductById(this._hladaneId).then((product: OpravenaProduktovaClassa) => {
                this.hladanePole = product;
            }).catch((e: Error) => {
                console.error(e.message);
            });
        });
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    // pridanie recenzie ku konkrétnemu produktu
    addToDataProdukt(recenzia: string): void {
        if (this.hladanePole.reviews) {
            this.hladanePole.reviews.push(recenzia);
        }
    }

    // vyslanie recenzií do obchod-copy componentu
    addToAllReviews(recenzia: string): void {
        const dateAndTime = new Date().toLocaleString();
        this.allReviews.emit({
            review: recenzia,
            date: dateAndTime,
            productName: this.hladanePole.name
        });
    }

    toShoppingCart(dataProdukt: OpravenaProduktovaClassa): void {
        this._shoppingService.addToCart(dataProdukt);
    }

    // otvorenie dialog okna na editovanie produktu
    openDialog(dataProdukt: OpravenaProduktovaClassa): void {
        const dialogRef = this._dialog.open(NewProductFormComponent, {
            width: '90vw',
            height: '95vh',
            maxWidth: '90vw',
            maxHeight: '95vh',
            panelClass: 'full-screen-modal',
            data: dataProdukt
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
