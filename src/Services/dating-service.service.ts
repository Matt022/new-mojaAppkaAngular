import { Injectable } from '@angular/core';
import { ListOfFemaleUsers } from 'src/app/dating-app-profiles/models/ListOfFemaleUsers';
import { ListOfMaleUsers } from 'src/app/dating-app-profiles/models/ListOfMaleUsers';
import { UserFemale } from 'src/app/dating-app-profiles/models/UserFemale';
import { UserMale } from 'src/app/dating-app-profiles/models/UserMale';

@Injectable({
    providedIn: 'root'
})
export class DatingService {
    // zoznam všetkých mužov
    getMaleUseList(): UserMale[] {
        const maleUserList: UserMale[] = ListOfMaleUsers.maleUserList;
        return maleUserList;
    }

    // zoznam všetkých žien
    getFemaleUseList(): UserFemale[] {
        const femaleUserList: UserFemale[] = ListOfFemaleUsers.femaleUserList;
        return femaleUserList;
    }

    // filtrovanie zo všetkých
    getProductByUserName(detailedUserName: string): UserMale | UserFemale {
        let hladanyUser!: UserMale | UserFemale;

        const mergedUsersList: UserMale[] | UserFemale[] = [...this.getMaleUseList(), ...this.getFemaleUseList()];

        mergedUsersList.forEach((user: UserMale | UserFemale) => {
            if (user.meno === detailedUserName) {
                hladanyUser = user;
            }
        });

        return hladanyUser;
    }
}
