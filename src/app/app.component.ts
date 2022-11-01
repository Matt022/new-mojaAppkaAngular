import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from './HiddenComponents/modal-dialog/modal-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'MojaPrvaAplikacia';

    constructor(private _dialog: MatDialog) { }

    openDialog() {
        const dialogRef = this._dialog.open(ModalDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
