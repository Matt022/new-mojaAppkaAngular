// --------------------------------
// vypísané všetky produkty

import { Product } from "./productclass.model";

export class ProductModel {
    static productList: Product[] = [
        {
            id: 101,
            name: 'Acer Nitro 5 Obsidian',
            category: 'Gaming',
            price: 849,
            description:
                'Herný notebook - Intel Core i5 9300H Coffee Lake, 15.6" IPS matný 1920 x 1080 120Hz, RAM 8GB DDR4, NVIDIA GeForce GTX 1650 4GB, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB-C, WiFi 6, 56 Wh batéria, hmotnosť 2.5kg, Windows 10 Home, HDD upgrade kit (AN515-54-54KC) ',
            vendors: [
                { name: 'Alza', stockCount: 11 },
                { name: 'Agem', stockCount: 2 },
                { name: 'MediaMarkt', stockCount: 1 },
                { name: 'Asbis', stockCount: 1 },
                { name: 'Nay', stockCount: 5 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: ["Random recenzia"],
            predaneMnozstvoMesiac: 2,
            predaneMnozstvoObdobie: 9,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            },
        },
        {
            id: 102,
            name: 'Lenovo Legion 5 Pro',
            category: 'Gaming',
            price: 1539,
            description:
                'Herný notebook - AMD Ryzen 7 5800H, 16" IPS antireflexný 2560 x 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3070 8GB 140 W, SSD 1000GB, numerická klávesnica, podsvietená RGB klávesnica, webkamera, USB-C, WiFi 6, 80 Wh batéria, hmotnosť 2.45kg, bez operačného systému',
            vendors: [
                { name: 'Alza', stockCount: 10 },
                { name: 'Agem', stockCount: 10 },
                { name: 'MediaMarkt', stockCount: 10 },
                { name: 'Asbis', stockCount: 10 },
                { name: 'Nay', stockCount: 10 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 4,
            predaneMnozstvoObdobie: 8,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
        {
            id: 103,
            name: 'Macbook Pro 13" M1 SK2020',
            category: 'MacBook',
            price: 1459,
            description:
                'MacBook - Apple M1, 13.3" IPS lesklý 2560 x 1600 , RAM 8GB, Apple M1 8-jadrová GPU, SSD 256GB, podsvietená klávesnica, webkamera, USB-C, čítačka odtlačkov prstov, WiFi 6, 58.2 Wh batéria, hmotnosť 1.37kg, MAC OS',
            vendors: [
                { name: 'Alza', stockCount: 2 },
                { name: 'Agem', stockCount: 0 },
                { name: 'MediaMarkt', stockCount: 0 },
                { name: 'Asbis', stockCount: 4 },
                { name: 'Nay', stockCount: 1 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 3,
            predaneMnozstvoObdobie: 7,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
        {
            id: 104,
            name: 'Dell Vostro 3500',
            category: 'Kancelária',
            price: 480,
            description:
                'Notebook - Intel Core i3 1115G4 Tiger Lake, 15" IPS matný 1920 x 1080, RAM 8GB DDR4, Intel UHD Graphics, SSD 256GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, čítačka odtlačkov prstov, WiFi 5, 42 Wh batéria, hmotnosť 1.98kg, Windows 10 Pro (NBD)',
            vendors: [
                { name: 'Alza', stockCount: 0 },
                { name: 'Agem', stockCount: 2 },
                { name: 'MediaMarkt', stockCount: 0 },
                { name: 'Asbis', stockCount: 0 },
                { name: 'Nay', stockCount: 0 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 7,
            predaneMnozstvoObdobie: 9,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
        {
            id: 105,
            name: 'Asus Zenbook 13',
            category: 'Ultrabook',
            price: 1149,
            vendors: [
                { name: 'Alza', stockCount: 2 },
                { name: 'Agem', stockCount: 1 },
                { name: 'MediaMarkt', stockCount: 1 },
                { name: 'Asbis', stockCount: 1 },
                { name: 'Nay', stockCount: 1 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 6,
            predaneMnozstvoObdobie: 10,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
        {
            id: 106,
            name: 'Dell Latitude 5531',
            category: 'Manažerský',
            price: 1704,
            description: 'Notebook - Intel Core i7 12800H Alder Lake, 15.6" WVA matný 1920 x 1080, RAM 16GB DDR5, NVIDIA GeForce MX550 2GB, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, čítačka odtlačkov prstov, WiFi 6E, hmotnosť 1.79kg, Windows 11 Pro (NBD)',
            vendors: [
                { name: 'Alza', stockCount: 5 },
                { name: 'Agem', stockCount: 0 },
                { name: 'MediaMarkt', stockCount: 2 },
                { name: 'Asbis', stockCount: 3 },
                { name: 'Nay', stockCount: 1 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 10,
            predaneMnozstvoObdobie: 20,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
        {
            id: 107,
            name: 'HP ENVY x360',
            category: 'Tablet PC',
            price: 939,
            vendors: [
                { name: 'Alza', stockCount: 0 },
                { name: 'Agem', stockCount: 0 },
                { name: 'MediaMarkt', stockCount: 1 },
                { name: 'Asbis', stockCount: 0 },
                { name: 'Nay', stockCount: 0 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 7,
            predaneMnozstvoObdobie: 18,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
        {
            id: 108,
            name: 'Macbook Air 13" M2 SK 2022',
            category: 'Macbook',
            price: 979,
            vendors: [
                { name: 'Alza', stockCount: 0 },
                { name: 'Agem', stockCount: 0 },
                { name: 'MediaMarkt', stockCount: 0 },
                { name: 'Asbis', stockCount: 0 },
                { name: 'Nay', stockCount: 0 },
            ],
            stockCount(): string | number {
                let result: string | number = 0;
                this.vendors!.forEach((vendor: { name: string, stockCount: number; }) => {
                    result = +result + vendor.stockCount;
                });

                if (result > 0) {
                    return result;
                } else {
                    result = 'Nedostupný';
                    return result;
                }
            },
            reviews: [],
            predaneMnozstvoMesiac: 7,
            predaneMnozstvoObdobie: 12,
            vypocetObratuMesiac(): number {
                const resultMesiac = this.predaneMnozstvoMesiac * this.price!;
                return resultMesiac;
            },
            vypocetObratuObdobie(): number {
                const resultObdobie = this.predaneMnozstvoObdobie * this.price!;
                return resultObdobie;
            }
        },
    ];



}

