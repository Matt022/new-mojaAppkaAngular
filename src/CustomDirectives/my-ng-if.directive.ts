import { Directive, ViewContainerRef, TemplateRef, OnChanges, Input } from '@angular/core';

@Directive({
    selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnChanges {
    @Input() myNgIf: boolean;


    constructor(private view: ViewContainerRef, private template: TemplateRef<HTMLElement>) {

    }

    ngOnChanges(): void {
        if (this.myNgIf) {
            // renderovanie templatu
            this.view.createEmbeddedView(this.template);
        } else {
            //odstránenie templatu
            this.view.clear();
        }
    }
}
