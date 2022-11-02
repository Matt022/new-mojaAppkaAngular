import { Product } from '../SharedModels/productclass.model';
import { ProductModel } from "../SharedModels/product.model";
import { OpravenaProduktovaClassa } from '../SharedModels/opravenaProduktovaClassa.model';
import { Injectable } from '@angular/core';
import { StatistickyProdukt } from "../SharedModels/statistickyProdukt.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private _cacheProductDataList: OpravenaProduktovaClassa[];

    private fakeApiRequest(): OpravenaProduktovaClassa[] {
        const resultSet: OpravenaProduktovaClassa[] = [];

        ProductModel.productList.forEach((product: Product) => {
            const prod: OpravenaProduktovaClassa = {
                id: product.id,
                name: product.name,
                category: product.category,
                price: product.price,
                stockCount: product.stockCount(),
                description: product.description,
                vendors: product.vendors,
                reviews: product.reviews,
                predaneMnozstvoMesiac: product.predaneMnozstvoMesiac,
                predaneMnozstvoObdobie: product.predaneMnozstvoObdobie,
                obratMesiac: product.vypocetObratuMesiac(),
                obratObdobie: product.vypocetObratuObdobie(),
            };

            resultSet.push(prod);
        });

        return resultSet;

    }

    getProductList(): Promise<OpravenaProduktovaClassa[]> {
        return new Promise<OpravenaProduktovaClassa[]>((resolve) => {
            if (this._cacheProductDataList) {
                resolve(this._cacheProductDataList);
            } else {
                setTimeout(() => {
                    this._cacheProductDataList = this.fakeApiRequest();
                    resolve(this._cacheProductDataList);
                }, 500);
            }
        });
    }

    getProductById(detailedIdProduct: number): Promise<OpravenaProduktovaClassa> {
        return new Promise<OpravenaProduktovaClassa>((resolve) => {
            let hladaneIdProduktu: OpravenaProduktovaClassa;

            // this.fakeApiRequest().forEach((produkt: OpravenaProduktovaClassa) => {
            //     if (produkt.id === detailedIdProduct) {
            //         hladaneIdProduktu = produkt;
            //         resolve(hladaneIdProduktu);
            //     }
            // });
            if (!this._cacheProductDataList) {
                this.getProductList().then((productList: OpravenaProduktovaClassa[]) => {
                    productList.forEach((produkt: OpravenaProduktovaClassa) => {
                        if (produkt.id === detailedIdProduct) {
                            hladaneIdProduktu = produkt;
                            resolve(hladaneIdProduktu);
                        }
                    });
                });
            } else {
                this._cacheProductDataList.forEach((produkt: OpravenaProduktovaClassa) => {
                    if (produkt.id === detailedIdProduct) {
                        hladaneIdProduktu = produkt;
                        resolve(hladaneIdProduktu);
                    }
                });
            }
        });
    }

    // -------------------------------------------------------------------------------------------------------------------------
    // štatisticke veci

    getStatistickeProdukty(): StatistickyProdukt[] {
        const resultSet: StatistickyProdukt[] = [];

        ProductModel.productList.forEach((product: Product) => {
            const prod: StatistickyProdukt = {
                id: product.id,
                name: product.name,
                price: product.price,
                stockCount: product.stockCount()!,
                obrat_obdobie: product.vypocetObratuObdobie(),
                obrat_mesiac: product.vypocetObratuMesiac(),
            };

            resultSet.push(prod);
        });

        return resultSet;
    }

    getNedostupneProdukty(): StatistickyProdukt[] {
        const resultSet: StatistickyProdukt[] = [];

        ProductModel.productList.forEach((product: Product) => {
            const prod: StatistickyProdukt = {
                id: product.id,
                name: product.name,
                price: product.price,
                stockCount: product.stockCount(),
                obrat_obdobie: product.vypocetObratuObdobie(),
                obrat_mesiac: product.vypocetObratuMesiac(),
            };

            if (prod.stockCount === "Nedostupný") {
                resultSet.push(prod);
            }
        });

        return resultSet;
    }

    // ---------------------------------------------------------------------------------
    // ------------------------- VECIČKY KU ŠTATISTIKÁM --------------------------------
    // všetky obraty za mesiac
    obratyZaMesiac(): number {
        let result: number = 0;
        this.getStatistickeProdukty().forEach((product: StatistickyProdukt) => {
            result = result + product.obrat_mesiac;
        });

        return result;
    }

    //  všetky obraty za obdobie
    obratyZaObdobie(): number {
        let result: number = 0;
        this.getStatistickeProdukty().forEach((product: StatistickyProdukt) => {
            result = result + product.obrat_obdobie;
        });

        return result;
    }

    //  priemerná cena predávaných produktov
    priemernaCena(): number {
        let price: number = 0;
        const pocetProduktov: number = this.getStatistickeProdukty().length;
        let result: number = 0;

        this.getStatistickeProdukty().forEach((product: StatistickyProdukt) => {
            if (typeof product.price === "number") {
                price = price + product.price;
            }
        });

        result = price / pocetProduktov;

        return result;
    }

    // najpredavanejší produkt
    najpredavanejsiProdukt(): string {
        let result: StatistickyProdukt = this.getStatistickeProdukty()[0];

        this.getStatistickeProdukty().forEach((product: StatistickyProdukt) => {
            if (result.obrat_obdobie! < product.obrat_obdobie!) {
                result = product;
            }
        });

        return result.name;
    }

    // odstránenie produktu
    deleteThisProduct(dataProduct: OpravenaProduktovaClassa): void {
        ProductModel.productList = ProductModel.productList.filter(element => element.id !== dataProduct.id);
    }


    // ----------------------------------------------------------
    // pridanie nového produktu z formuláru
    addNewProduct(newProduct: Product): void {
        ProductModel.productList.push(newProduct);
        if (this._cacheProductDataList) {

            const prod: OpravenaProduktovaClassa = {
                id: newProduct.id,
                name: newProduct.name,
                category: newProduct.category,
                price: newProduct.price,
                stockCount: newProduct.stockCount(),
                description: newProduct.description,
                vendors: newProduct.vendors,
                reviews: newProduct.reviews,
                predaneMnozstvoMesiac: newProduct.predaneMnozstvoMesiac,
                predaneMnozstvoObdobie: newProduct.predaneMnozstvoObdobie,
                obratMesiac: newProduct.vypocetObratuMesiac(),
                obratObdobie: newProduct.vypocetObratuObdobie(),
            };

            this._cacheProductDataList.push(prod);
        }
    }

    // ----------------------------------------------------------
    editThisProduct(productToEdit: Product): void {

        // pre štatistiku
        ProductModel.productList.forEach((product: Product) => {
            if (product.id === productToEdit.id) {
                product.name = productToEdit.name;
                product.category = productToEdit.category;
                product.price = productToEdit.price;
                product.description = productToEdit.description;
                product.vendors = productToEdit.vendors;
                product.reviews = productToEdit.reviews;
                product.predaneMnozstvoMesiac = productToEdit.predaneMnozstvoMesiac;
                product.predaneMnozstvoObdobie = productToEdit.predaneMnozstvoObdobie;

            }
        });

        // pre obchod a zvyšok
        if (this._cacheProductDataList) {
            this._cacheProductDataList.forEach((product: OpravenaProduktovaClassa) => {
                if (product.id === productToEdit.id) {
                    product.id = productToEdit.id;
                    product.name = productToEdit.name;
                    product.category = productToEdit.category;
                    product.price = productToEdit.price;
                    product.stockCount = productToEdit.stockCount();
                    product.description = productToEdit.description;
                    product.vendors = productToEdit.vendors;
                    product.reviews = productToEdit.reviews;
                    product.predaneMnozstvoMesiac = productToEdit.predaneMnozstvoMesiac;
                    product.predaneMnozstvoObdobie = productToEdit.predaneMnozstvoObdobie;
                    product.obratMesiac = productToEdit.vypocetObratuMesiac();
                    product.obratObdobie = productToEdit.vypocetObratuObdobie();
                }
            });
        }
    }
}


// -----------------------------------------------

