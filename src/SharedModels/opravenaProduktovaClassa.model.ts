export class OpravenaProduktovaClassa {
    id: number;
    name: string;
    category: string;
    price?: number;
    stockCount: number | string;
    description?: string;
    vendors?: { name: string; stockCount: number }[];
    reviews?: string[] = [];
    predaneMnozstvoMesiac: number;
    predaneMnozstvoObdobie: number;
    obratMesiac: number;
    obratObdobie: number;
}