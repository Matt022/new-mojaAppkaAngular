import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-cvicny',
    templateUrl: './cvicny.component.html',
    styleUrls: ['./cvicny.component.scss'],

})
export class CvicnyComponent implements OnInit {
    constructor() {
        //
    }

    ngOnInit(): void {
        //
    }

    dataList = [
        {
            pname: "abc",
            numbers: [123, 254, 365],
            age: 20,
        },
        {
            pname: "cbd",
            numbers: [234],
            age: 20,
        },
        {
            pname: "dba",
            numbers: [356],
            age: 20,
        },
        {
            pname: "aaa",
            numbers: [356],
            age: 20,
        },
        {
            pname: "bmn",
            numbers: [356],
            age: 20,
        },
        {
            pname: "aca",
            numbers: [356],
            age: 20,
        }
    ];
}
