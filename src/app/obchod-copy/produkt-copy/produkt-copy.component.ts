import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/Services/shopping-service.service';


import { OpravenaProduktovaClassa } from '../../../SharedModels/opravenaProduktovaClassa.model';
import { NewProductFormComponent } from '../new-product-form/new-product-form.component';

@Component({
    selector: 'app-produkt-copy',
    templateUrl: './produkt-copy.component.html',
    styleUrls: ['./produkt-copy.component.scss']
})
export class ProduktCopyComponent {
    constructor(private _router: Router, private _shoppingService: ShoppingService, private _dialog: MatDialog) { }

    @Input() dataProdukt: OpravenaProduktovaClassa = new OpravenaProduktovaClassa();
    @Output() allReviews = new EventEmitter<{ review: string; date: string; productName: string; }>();
    @Output() deletedProdukt = new EventEmitter<OpravenaProduktovaClassa>();

    // pridanie recenzií ku konkrétnemu produktu
    addToDataProdukt(recenzia: string): void {
        if (this.dataProdukt.reviews) {
            this.dataProdukt.reviews.push(recenzia);
        }
    }

    // vyslanie recenzií do obchod-copy componentu
    addToAllReviews(recenzia: string): void {
        const dateAndTime = new Date().toLocaleString();
        this.allReviews.emit({
            review: recenzia,
            date: dateAndTime,
            productName: this.dataProdukt.name
        });
    }

    //  navigovanie ku detailu konkrétneho produktu
    getTheDetailsToUrl(dataProdukt: OpravenaProduktovaClassa): void {
        this._router.navigate(["obchod-copy/produkt/" + dataProdukt.id]);
    }

    // metoda toShoppingCart, ktora berie datovy produkt ako objekt a posiela ho pomocou servisy do metódy addToCart()
    toShoppingCart(dataProdukt: OpravenaProduktovaClassa): void {
        this._shoppingService.addToCart(dataProdukt);
    }

    // odstránenie produktu
    deleteProdukt(dataProdukt: OpravenaProduktovaClassa): void {
        this.deletedProdukt.emit(dataProdukt);
    }

    openDialog(dataProdukt: OpravenaProduktovaClassa) {
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
