import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ProductService } from 'src/Services/product-service.service';

import { Product } from 'src/SharedModels/productclass.model';
import { OpravenaProduktovaClassa } from '../../../SharedModels/opravenaProduktovaClassa.model';

@Component({
    selector: 'app-new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewProductFormComponent implements OnInit {
    productForm: FormGroup;
    submitted: boolean = false;
    sendProduct: boolean = false;
    editedChanges: boolean = false;
    notAllowed: boolean = false;
    cancelChanges: boolean = false;

    constructor(private _productService: ProductService, private dialogRef: MatDialogRef<NewProductFormComponent>, @Inject(MAT_DIALOG_DATA) public data: OpravenaProduktovaClassa) {

    }

    private resetovanieFormularuDoPovodnehoStavu(): void {
        // reaktívny formulár a prípadná inicializácia defaultných hodnôt
        if (!this.data) {
            this.productForm = new FormGroup({
                productDetails: new FormGroup({
                    title: new FormControl(null, [Validators.required]),
                    price: new FormControl(null, [Validators.required, this.lessOrEqualThanZero]),
                    category: new FormControl('Vyberte kategóriu'),
                    description: new FormControl(null),
                    soldPerMonth: new FormControl(null, [Validators.required, this.lessThanZero]),
                    soldPerPeriod: new FormControl(null, [Validators.required, this.lessThanZero])
                }),
                vendors: new FormArray([
                    new FormGroup({
                        name: new FormControl(null, Validators.required),
                        stockCount: new FormControl(null, Validators.required)
                    })
                ]),
                reviews: new FormArray([
                    new FormControl(null)
                ])
            });
        } else {
            this.productForm = new FormGroup({
                productDetails: new FormGroup({
                    title: new FormControl(this.data.name, [Validators.required]),
                    price: new FormControl(this.data.price, [Validators.required, this.lessOrEqualThanZero]),
                    category: new FormControl(this.data.category),
                    description: new FormControl(this.data.description),
                    soldPerMonth: new FormControl(this.data.predaneMnozstvoMesiac, [Validators.required, this.lessThanZero]),
                    soldPerPeriod: new FormControl(this.data.predaneMnozstvoObdobie, [Validators.required, this.lessThanZero])
                }),
                vendors: new FormArray([
                    new FormGroup({
                        name: new FormControl(null, Validators.required),
                        stockCount: new FormControl(null, Validators.required)
                    })
                ]),
                reviews: new FormArray([
                    new FormControl(null)
                ])
            });

            this.addVendorsFromEditedData();
            this.addReviewsFromEditedData();
        }
    }

    //
    ngOnInit(): void {
        // reaktívny formulár a prípadná inicializácia defaultných hodnôt
        this.resetovanieFormularuDoPovodnehoStavu();
    }

    //----------------------------------------------------------------------------
    // zachytávanie recenzií z form array
    get getReviews(): FormArray<AbstractControl> {
        return this.productForm.get('reviews') as FormArray;
    }

    // pridávanie nových inputov alebo lepšie povedané recenzií na kliknutie na button
    AddReviews(): void {
        (<FormArray>this.productForm.get('reviews')).push(new FormControl(null, Validators.required));
    }

    addReviewsFromEditedData(): void {
        this.RemoveLastReview();
        this.data.reviews?.forEach((review: string) => {
            (<FormArray>this.productForm.get('reviews')).push(new FormControl(review, Validators.required));
        });
    }

    // odstránenie poslednej recenzie
    RemoveLastReview(): void {
        this.getReviews.removeAt(this.getReviews.length - 1);
    }

    removeThisReview(index: number): void{
        this.getReviews.removeAt(index);
    }

    //----------------------------------------------------------------------------
    // zachytávanie vendorov z form array
    get vendorsArray(): FormArray<AbstractControl> {
        return this.productForm.get('vendors') as FormArray;
    }

    // pridávanie nových double inputov alebo lepšie povedané vendorov a na základe toho sa vypočíta stockCount
    addVendor(): void {
        (<FormArray>this.productForm.get('vendors')).push(new FormGroup({
            name: new FormControl(null, Validators.required),
            stockCount: new FormControl(null, Validators.required),
        }));
    }

    // pridanie vendorov na základe dát
    addVendorsFromEditedData(): void {
        this.vendorsArray.removeAt(this.vendorsArray.length - 1);
        this.data.vendors?.forEach((vendor: { name: string, stockCount: number; }) => {
            (<FormArray>this.productForm.get('vendors')).push(new FormGroup({
                name: new FormControl(vendor.name, Validators.required),
                stockCount: new FormControl(vendor.stockCount, Validators.required),
            }));
        });
    }

    // odstránenie posledného vendora na kliknutie
    removeVendor(): void {
        if (this.vendorsArray.length > 1) {
            this.vendorsArray.removeAt(this.vendorsArray.length - 1);
        } else {
            this.notAllowed = true;
            setTimeout(() => {
                this.notAllowed = false;
            }, 1000);
        }
    }


    //odstránenie posledného vendora na kliknutie
    removeThisVendor(index: number): void {
        if (this.vendorsArray.length > 1) {
            this.vendorsArray.removeAt(index);
        } else {
            this.notAllowed = true;
            setTimeout(() => {
                this.notAllowed = false;
            }, 1000);
        }
    }

    // na kliknutie over, či sú zadané údaje a pošli ich prostredníctvom servisy ďalej
    onSubmit(): void {
        if (this.productForm.valid && !this.validateMonthAndPeriod() && !this.data) {
            const newProduct = new Product();

            newProduct.id = Math.floor(100 + Math.random() * 900);
            newProduct.name = this.productForm.value.productDetails.title;
            newProduct.price = this.productForm.value.productDetails.price;
            newProduct.category = this.productForm.value.productDetails.category == "Vyberte kategóriu" ? "Bežné použitie" : this.productForm.value.productDetails.category;
            newProduct.description = this.productForm.value.productDetails.description;
            newProduct.predaneMnozstvoMesiac = this.productForm.value.productDetails.soldPerMonth;
            newProduct.predaneMnozstvoObdobie = this.productForm.value.productDetails.soldPerPeriod;
            newProduct.vendors = this.productForm.value.vendors;
            newProduct.reviews = this.productForm.value.reviews;


            // odoslanie vyplneného produktu pomocou do servisy
            this._productService.addNewProduct(newProduct);

            this.resetovanieFormularuDoPovodnehoStavu();
            this.sendProduct = true;

            setTimeout(() => {
                this.sendProduct = false;
                this.closeDialog();
            }, 2000);
        } else if (this.productForm.valid && !this.validateMonthAndPeriod() && this.data) {
            const newProduct = new Product();

            newProduct.id = this.data.id;
            newProduct.name = this.productForm.value.productDetails.title;
            newProduct.price = this.productForm.value.productDetails.price;
            newProduct.category = this.productForm.value.productDetails.category == "Vyberte kategóriu" ? "Bežné použitie" : this.productForm.value.productDetails.category;
            newProduct.description = this.productForm.value.productDetails.description;
            newProduct.predaneMnozstvoMesiac = this.productForm.value.productDetails.soldPerMonth;
            newProduct.predaneMnozstvoObdobie = this.productForm.value.productDetails.soldPerPeriod;
            newProduct.vendors = this.productForm.value.vendors;
            newProduct.reviews = this.productForm.value.reviews;

            this._productService.editThisProduct(newProduct);

            this.resetovanieFormularuDoPovodnehoStavu();
            this.editedChanges = true;

            setTimeout(() => {
                this.editedChanges = false;
                this.closeDialog();
            }, 1000);

        } else {
            this.productForm.markAllAsTouched();
            this.submitted = true;

            setTimeout(() => {
                this.submitted = false;
            }, 1000);
        }
    }

    // zadanie default hodnôt
    setDefaultValues(): void {
        this.resetovanieFormularuDoPovodnehoStavu();
        this.productForm.setValue({
            productDetails: {
                title: 'Lenovo Yoga 7 15ITL5',
                price: 927,
                category: 'Tablet PC',
                description: 'Tablet PC - Intel Core i5 1135G7 Tiger Lake, dotykový 15.6" IPS lesklý 1920 x 1080,RAM 16GB DDR4, Intel Iris Xe Graphics, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, čítačka odtlačkov prstov, stylus, WiFi 6, hmotnosť 1,9 kg, Windows 11 Home',
                soldPerMonth: 20,
                soldPerPeriod: 40
            },
            vendors: [{
                name: "Alza",
                stockCount: 20
            }
            ],
            reviews: [
                "Výborný počítač, beriem hneď"
            ]
        });
    }

    // ---------------------------------------------------------------------------------------------------------------------------------------------------------------
    // validácie

    // ak je hodnota menej alebo rovná ako nula
    lessOrEqualThanZero(control: FormControl): { lessOrEqualThanZero: boolean; } | null {
        if (control.value != null && control.value <= 0) {
            return { lessOrEqualThanZero: true };
        }

        return null;
    }

    lessThanZero(control: FormControl): { lessThanZero: boolean; } | null {
        if (control.value != null && control.value < 0) {
            return { lessThanZero: true };
        }

        return null;
    }

    get productDetails(): FormGroup {
        return this.productForm.get('productDetails') as FormGroup;
    }

    validateMonthAndPeriod(): boolean {
        if (this.productDetails.controls['soldPerMonth'].value > this.productDetails.controls['soldPerPeriod'].value) {
            return true;
        } else {
            return false;
        }
    }

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // mat dialog

    closeDialog(): void {
        this.dialogRef.close();
    }

    cancelChangesAndDialog(): void {
        this.cancelChanges = true;

        setTimeout(() => {
            this.cancelChanges = false;
            this.closeDialog();
        }, 1000);
    }
}
