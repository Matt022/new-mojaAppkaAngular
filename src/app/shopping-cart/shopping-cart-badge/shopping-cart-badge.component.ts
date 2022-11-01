import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from 'src/Services/shopping-service.service';
import { OpravenaProduktovaClassa } from 'src/SharedModels/opravenaProduktovaClassa.model';

@Component({
    selector: 'app-shopping-cart-badge',
    templateUrl: './shopping-cart-badge.component.html',
    styleUrls: ['./shopping-cart-badge.component.scss'],
})
export class ShoppingCartBadgeComponent implements OnInit, OnDestroy {
    totalItems: number = 0;
    private _shoppingSubscription: Subscription;

    constructor(private _shopService: ShoppingService) { }

    // subscribnutie sa na aktuálne informácie o produktoch, konkrétne o počte produktov pre badge číslo
    ngOnInit(): void {
        this._shoppingSubscription = this._shopService.getProducts().subscribe((product: OpravenaProduktovaClassa[]) => {
            this.totalItems = product.length;
        });
    }

    ngOnDestroy(): void {
        this._shoppingSubscription.unsubscribe();
    }
}
