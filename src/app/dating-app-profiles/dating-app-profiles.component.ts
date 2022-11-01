import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatingService } from 'src/Services/dating-service.service';
import { UserFemale } from './models/UserFemale';
import { UserMale } from './models/UserMale';

@Component({
    selector: 'app-dating-app-profiles',
    templateUrl: './dating-app-profiles.component.html',
    styleUrls: ['./dating-app-profiles.component.scss']
})
export class DatingAppProfilesComponent {

    constructor(private _dateService: DatingService, private _router: Router) { }

    maleUsersProfiles: UserMale[] = this._dateService.getMaleUseList();
    femaleusersProfiles: UserFemale[] = this._dateService.getFemaleUseList();

    fullProfile(user: UserMale | UserFemale): void {
        this._router.navigate(["dating-app/user/" + user.meno]);
    }
}
