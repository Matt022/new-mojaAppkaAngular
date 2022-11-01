import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    @Input() private highlight: string;

    constructor(private _element: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this._highlight(this.highlight);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._highlight('white');
    }

    private _highlight(color: string) {
        this._element.nativeElement.style.color = color;
        this._element.nativeElement.style.cursor = 'pointer';
    }
}
