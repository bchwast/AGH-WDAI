// export interface Dish {
//   id: number;
//   name: string;
//   cuisine: string;
//   type: string;
//   category: string;
//   ingredients: Array<string>;
//   maxAmount: number;
//   ordered: number;
//   price: number;
//   description: string;
//   photos: Array<string>;
//   rating: number;
//   reviews: Array<string>
// }

export class Dish implements Dish{
  public constructor(
    public id: number,
    public name: string,
    public cuisine: string,
    public type: string,
    public category: string,
    public ingredients: Array<string>,
    public maxAmount: number,
    public ordered: number,
    public price: number,
    public description: string,
    public photos: Array<string>,
    public rating: number,
    public ratings: Array<number>
  ) { }


}

