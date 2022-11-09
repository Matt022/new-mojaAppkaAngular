import { Component } from '@angular/core';

@Component({
    selector: 'app-prihlaska',
    templateUrl: './prihlaska.component.html',
    styleUrls: ['./prihlaska.component.scss'],
})
export class PrihlaskaComponent {
    login: boolean = false;

    toggleLogin(): void {
        this.login = !this.login;
    }
}
