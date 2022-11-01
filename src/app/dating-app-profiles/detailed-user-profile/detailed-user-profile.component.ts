import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatingService } from 'src/Services/dating-service.service';
import { UserFemale } from '../models/UserFemale';
import { UserMale } from '../models/UserMale';

@Component({
    selector: 'app-detailed-user-profile',
    templateUrl: './detailed-user-profile.component.html',
    styleUrls: ['./detailed-user-profile.component.scss']
})
export class DetailedUserProfileComponent implements OnInit, OnDestroy {

    toggle: boolean = false;
    hladanyUser: UserMale | UserFemale;
    gender: string;

    private _hladaneMeno: string;
    private _subscription: Subscription;

    constructor(private _route: ActivatedRoute, private _dateService: DatingService) {

    }

    // pole typov vlasov spojene do jedneho stringu
    typeOfHair(userTypesOfhair: string[]): string {
        const typehair: string[] = [];

        userTypesOfhair.forEach((hair: string) => {
            typehair.push(hair);
        });

        return typehair.join(" /");
    }

    // routing a získanie dát z dating app zoznamky
    // filtrovanie na základe kliknutia na zobrazenie profilu
    // hľadanie koho muž hlada ženu, žena muža

    ngOnInit(): void {
        this._subscription = this._route.paramMap.subscribe((p: ParamMap) => {
            const userName = p.get('user');

            this._hladaneMeno = userName!;
        });

        this.hladanyUser = this._dateService.getProductByUserName(this._hladaneMeno);

        this.gender = this.hladanyUser.gender === "male" ? "girl" : "boy";
    }

    // button na zobrazenie a skrytie sekcie na zobrazenie kontaktu
    toggleContact(): void {
        this.toggle = !this.toggle;
    }

    //  unsubscribe na subscription
    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
