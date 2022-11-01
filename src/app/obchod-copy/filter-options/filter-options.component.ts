import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-filter-options',
    templateUrl: './filter-options.component.html',
    styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent {
    private _isChanged = false;
    @Input() iAmChange: boolean = false;
    @Output() changeDetected: EventEmitter<boolean> = new EventEmitter();

    // funkcia na vyslanie alebo teda emitovanie zmien vo filter-options (nefunguje mi to podľa zadania)
    detectTheChange(): void {
        if(this._isChanged == false){
            this._isChanged = true;
            this.changeDetected.emit(true);
        } else {
            this._isChanged = false;
            this.changeDetected.emit(false);
        }
    }
}
