import { Component } from '@angular/core';

@Component({
    selector: 'app-first-info',
    templateUrl: './first-info.component.html',
    styleUrls: ['./first-info.component.scss']
})
export class FirstInfoComponent {

    nameOfSlide: string = 'Informácie o mne';
    fullName: string = 'Matúš Beňuš';
    age: number = 20;
    thisIsVariable: string = 'variable';

}
