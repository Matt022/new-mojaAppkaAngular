import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


import { ProductService } from 'src/Services/product-service.service';

import { Product } from 'src/SharedModels/productclass.model';

@Component({
    selector: 'app-new-product-form',
    templateUrl: './new-product-form.component.html',
    styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {
    productForm: FormGroup;
    submitted: boolean = false;
    sendProduct: boolean = false;

    constructor(private _productService: ProductService) {

    }

    private resetovanieFormularuDoPovodnehoStavu(): void {
        // reaktívny formulár a prípadná inicializácia defaultných hodnôt
        this.productForm = new FormGroup({
            productDetails: new FormGroup({
                title: new FormControl(null, [Validators.required]),
                price: new FormControl(null, [Validators.required, this.lessOrEqualThanZero]),
                category: new FormControl('Vyberte kategóriu', [Validators.required]),
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
    }


    ngOnInit(): void {
        // reaktívny formulár a prípadná inicializácia defaultných hodnôt
        this.resetovanieFormularuDoPovodnehoStavu();
    }

    // zachytávanie recenzií z form array
    get getReviews(): FormArray<AbstractControl> {
        return this.productForm.get('reviews') as FormArray;
    }

    // pridávanie nových inputov alebo lepšie povedané recenzií na kliknutie na button
    AddReviews(): void {
        (<FormArray>this.productForm.get('reviews')).push(new FormControl(null, Validators.required));
    }

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

    // na kliknutie over, či sú zadané údaje a pošli ich prostredníctvom servisy ďalej
    onSubmit(): void {
        if (this.productForm.valid && !this.validateMonthAndPeriod()) {
            const newProduct: Product = {
                id: Math.floor(100 + Math.random() * 900),
                name: this.productForm.value.productDetails.title,
                price: this.productForm.value.productDetails.price,
                category: this.productForm.value.productDetails.category == "Vyberte kategóriu" ? "Bežné použitie" : this.productForm.value.productDetails.category,
                description: this.productForm.value.productDetails.description,
                predaneMnozstvoMesiac: this.productForm.value.productDetails.soldPerMonth,
                predaneMnozstvoObdobie: this.productForm.value.productDetails.soldPerPeriod,
                vendors: this.productForm.value.vendors,
                reviews: this.productForm.value.reviews,
                vypocetObratuMesiac(): number {
                    const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                    return resultMesiac;
                },
                vypocetObratuObdobie(): number {
                    const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                    return resultObdobie;
                },
                stockCount(): string | number {
                    let result: string | number = 0;
                    this.vendors!.forEach((vendor: { name: string; stockCount: number; }) => {
                        result = +result + vendor.stockCount;
                    });

                    if (result > 0) {
                        return result;
                    } else {
                        result = 'Nedostupný';
                        return result;
                    }
                }
            };

            // odoslanie vyplneného produktu pomocou do servisy
            this._productService.addNewProduct(newProduct);

            this.resetovanieFormularuDoPovodnehoStavu();
            this.sendProduct = true;

            setTimeout(() => {
                this.sendProduct = false;
            }, 2000);
        } else {
            this.submitted = true;

            setTimeout(() => {
                this.submitted = false;
            }, 2000);
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
        if(this.productDetails.controls['soldPerMonth'].value > this.productDetails.controls['soldPerPeriod'].value) {
            return true;
        } else {
            return false;
        }
    }
}
