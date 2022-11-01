import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appSetBackground]',
})
export class SetBackgroundDirective implements OnInit {
    constructor(private _element: ElementRef) {
        this._element = _element;
    }

    ngOnInit(): void {
        this._element.nativeElement.style.backgroundColor = '#C8E6C9';
        this._element.nativeElement.style.color = 'blue';
    }
}
