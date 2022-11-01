import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/Services/shopping-service.service';
import { OpravenaProduktovaClassa } from 'src/SharedModels/opravenaProduktovaClassa.model';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
    products: OpravenaProduktovaClassa[] = [];
    private _shoppingSubscription: Subscription;

    constructor(private _shopService: ShoppingService) { }

    // subscribnutie sa na aktuálne informácie o produktoch
    ngOnInit(): void {
        this._shoppingSubscription = this._shopService.getProducts().subscribe((items: OpravenaProduktovaClassa[]) => {
            this.products = items;
        });
    }

    // odstránenie jednej položky
    removeItem(item: OpravenaProduktovaClassa): void {
        this._shopService.removeCartItem(item);
    }

    // odstránenie všetkých položiek
    emptyCart(products: OpravenaProduktovaClassa[]): void {
        this._shopService.removeAllItemsFromCart(products);
    }

    // výpočet celkovej ceny
    totalPrice(): number {
        return this._shopService.getTotalPrice();
    }

    //----------------------------------------------------------------------------------------------------------
    // unsubscribe na shopping subscription
    ngOnDestroy(): void {
        this._shoppingSubscription.unsubscribe();
    }
}
