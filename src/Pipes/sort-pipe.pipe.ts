import { Pipe, PipeTransform } from '@angular/core';
import { OpravenaProduktovaClassa } from '../SharedModels/opravenaProduktovaClassa.model';

@Pipe({
    name: 'sortByABC'
})
export class SortPipePipe implements PipeTransform {
    transform(value: OpravenaProduktovaClassa[], change: boolean): OpravenaProduktovaClassa[] {
        if (change) {
            // zorad od z do a
            return value.sort((a: OpravenaProduktovaClassa, b: OpravenaProduktovaClassa) => {
                if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            });

        } else {
            // zorad od a do z  default
            return value.sort((a: OpravenaProduktovaClassa, b: OpravenaProduktovaClassa) => {
                if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            });
        }
    }
}