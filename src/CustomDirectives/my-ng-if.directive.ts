import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[myNgIf]'
})
export class MyNgIfDirective {

    constructor(private el: ElementRef) {
        console.log(el.nativeElement);
    }

}
