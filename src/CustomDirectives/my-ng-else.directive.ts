import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[myNgElse]'
})
export class MyNgElseDirective implements OnChanges {
    @Input() myNgElse: boolean;


    constructor(private view: ViewContainerRef, private template: TemplateRef<HTMLElement>) {

    }

    ngOnChanges(): void {
        if (!this.myNgElse) {
            //odstránenie templatu
            this.view.clear();
        } else {
            // renderovanie templatu
            this.view.createEmbeddedView(this.template);
        }
    }
}