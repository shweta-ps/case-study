
namespace ProductsModel {

export interface Product {
    brandName: string,
    id:number;
    cost: number;
    offer: number;
    type: string;
}

export interface Products {
   products: Product[];
}

}