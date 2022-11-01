import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-recenzie',
    templateUrl: './recenzie.component.html',
    styleUrls: ['./recenzie.component.scss'],
})
export class RecenzieComponent {

    @Output() reviewAdd: EventEmitter<string> = new EventEmitter();
    @Output() publicReview: EventEmitter<string> = new EventEmitter();

    writtenReview: string = "";

    // funkcia na emitovanie (vyslanie) napísaných recenzií po kliknutí na button Pridať recenziu
    pridanieRecenzie(rev: string): void{
        this.reviewAdd.emit(rev);
        this.publicReview.emit(rev);
        this.writtenReview = "";
    }
}
