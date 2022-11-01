import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    private _poleStringov: string[] = [];
    resultSet: string[] = [];
    searchTerm: string = '';

    ngOnInit(): void {
        this._poleStringov = [
            'C#',
            'Java',
            'JavaScript',
            'Angular',
            '.NET Core',
            'Go',
            'Python',
            '.NET Framework',
            'Spring',
            'NativeScript',
            'Android',
        ];
    }

    filter(someValue: string): void {
        const result: string[] = [];

        if (this.searchTerm.length >= 2 ) {
            this._poleStringov.forEach((item: string) => {
                if (item.toLowerCase().includes(someValue.toLowerCase())) {
                    result.push(item);
                }
            });
        }

        this.resultSet = result;
    }

    clicking(thatOne: string): void {
        this.searchTerm = "";
        this.resultSet = [];
        alert(`Vybrali ste položku ${thatOne}`);
    }

    ngOnDestroy(): void {
        this._poleStringov = [];
    }
}
