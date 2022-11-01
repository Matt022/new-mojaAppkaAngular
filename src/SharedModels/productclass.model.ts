// trieda pre produkt

export class Product {
    id: number;
    name: string;
    category: string;
    price?: number;
    description?: string;
    vendors: { name: string; stockCount: number; }[];
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
    reviews?: string[] = [];
    predaneMnozstvoMesiac: number;
    predaneMnozstvoObdobie: number;
    vypocetObratuMesiac(): number {
        const resultMesiac = this.predaneMnozstvoMesiac * +this.price!;
        return resultMesiac;
    }
    vypocetObratuObdobie(): number {
        const resultObdobie = this.predaneMnozstvoObdobie * +this.price!;
        return resultObdobie;
    }
}

// ---------------------------------------------------------------------------
