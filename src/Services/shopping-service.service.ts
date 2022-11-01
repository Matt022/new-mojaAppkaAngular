import { Injectable } from '@angular/core';
import { OpravenaProduktovaClassa } from "../SharedModels/opravenaProduktovaClassa.model";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    private _cartItemList: OpravenaProduktovaClassa[] = [];
    private _productList: BehaviorSubject<OpravenaProduktovaClassa[]> = new BehaviorSubject<OpravenaProduktovaClassa[]>([]);
    private _stockCountPlusOrMinus: number = 0;
    private _completeStockCount: number = 0;

    getProducts(): Observable<OpravenaProduktovaClassa[]> {
        return this._productList.asObservable();
    }

    // manipulácia s počtom produktov
    // pridávanie do košíka a pushovanie do poľa produktových objektov
    // BehaviorSubject.next() ukladá najnovšiu hodnotu vysielanú svojim spotrebiteľom a vždy, keď sa nový pozorovateľ prihlási, okamžite dostane „aktuálnu hodnotu“ od BehaviorSubject.

    addToCart(product: OpravenaProduktovaClassa): void {
        this._stockCountPlusOrMinus = +product.stockCount!;
        this._stockCountPlusOrMinus--;
        product.stockCount = this._stockCountPlusOrMinus;

        this._cartItemList.push(product);
        this._productList.next(this._cartItemList);
    }


    // výpočet celkovej ceny produktov v košíku a vrátenie hodnoty
    getTotalPrice(): number {
        let grandTotal: number = 0;
        this._cartItemList.map((item: OpravenaProduktovaClassa) => {
            grandTotal += item.price!;
        });

        return grandTotal;
    }

    // odstránenie produktu z nákupného košíka pomocou .map() array metódy metódy
    // BehaviorSubject.next() ukladá najnovšiu hodnotu vysielanú svojim spotrebiteľom a vždy, keď sa nový pozorovateľ prihlási, okamžite dostane „aktuálnu hodnotu“ od BehaviorSubject.

    removeCartItem(product: OpravenaProduktovaClassa): void {
        this._cartItemList.map((item: OpravenaProduktovaClassa, index: number) => {
            if (product.id === item.id) {
                this._cartItemList.splice(index, 1);
                this._stockCountPlusOrMinus = +product.stockCount;
                this._stockCountPlusOrMinus++;
                product.stockCount = this._stockCountPlusOrMinus;
            }
        });

        this._productList.next(this._cartItemList);
    }

    // odstránenie všetkých produktov z nákupného košíka a následné informovanie ostatných subscriberov
    removeAllItemsFromCart(products: OpravenaProduktovaClassa[]): void {
        products.forEach((item: OpravenaProduktovaClassa) => {
            if (this._cartItemList.includes(item)) {
                this._completeStockCount = +item.stockCount;
                this._completeStockCount++;
                item.stockCount = this._completeStockCount;
            }
        });
        this._cartItemList.splice(0);

        this._productList.next(this._cartItemList);
    }
}
