import { Component } from '@angular/core';

@Component({
    selector: 'app-prihlaska',
    templateUrl: './prihlaska.component.html',
    styleUrls: ['./prihlaska.component.scss'],
})
export class PrihlaskaComponent {
    thaNameOfThisComponent: string = 'Prihláška';
    login: boolean = false;

    toggleLogin(): void {
        this.login = !this.login;
    }
}
