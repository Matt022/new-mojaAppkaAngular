export class ProductFormClass {
    id: number;
    name: string;
    category: string;
    price: number;
    stockCount: number;
    description: string;
    predaneMnozstvoMesiac: number;
    predaneMnozstvoObdobie: number;
    vypocetObratuMesiac(): number {
        const resultMesiac = this.predaneMnozstvoMesiac * this.price;
        return resultMesiac;
    }
    vypocetObratuObdobie(): number {
        const resultObdobie = this.predaneMnozstvoObdobie * this.price;
        return resultObdobie;
    }
}